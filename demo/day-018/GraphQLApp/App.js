import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, TextInput, View} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';

// //1. embed library
// import {
//   ApolloClient,
//   InMemoryCache,
//   gql,
//   ApolloProvider,
//   useQuery,
// } from '@apollo/client';

// //2. config/create connection
// const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache(),
// });

// //3. crate Query
// const QUERY_RATES = gql`
//   query {
//     rates(currency: "USD") {
//       currency
//       rate
//       name
//     }
//   }
// `;

// //4. run/execute the query

// const callRates = async () =>
//   client
//     .query({
//       query: QUERY_RATES,
//     })
//     .then(result => console.log({result}))
//     .catch(e => console.log({e}))
//     .finnaly(() => {
//       console.log('done');
//     });

// // 5 . bungkus provider
// const App = () => {
//   useEffect(() => {
//     callRates();
//   }, []);
//   return (
//     <ApolloProvider client={client}>
//       <View>
//         <Text>Graph Apps</Text>
//         <Home />
//       </View>
//     </ApolloProvider>
//   );
// };

// export default App;

import {GraphProvider, LocalProvider} from './src/config/apollo';
import {QUERY_RATES} from './src/config/graphql/Query/rates';
import USERS from './src/config/graphql/Mutation/users';

const Home = () => {
  const {loading, data, error} = useQuery(QUERY_RATES);
  return (
    <View>
      <Text>Home</Text>
      {loading && <Text>Sedang ngambil Data....</Text>}
      {!loading && Object.keys(data).length > 0 && (
        <FlatList
          data={data.rates}
          renderItem={({item}) => {
            // console.log({item});
            return (
              <Text>
                {item.name} - ({item.currency}) : {item.rate}
              </Text>
            );
          }}
        />
      )}
    </View>
  );
};

const User = () => {
  const [user, setUser] = useState();
  // console.log({a: USERS.add});
  const {data: taksData, error: errorTask, loading: loadingTask} = useQuery(
    USERS.taskById,
    {
      variables: {
        userId: 1,
      },
    },
  );
  const [addNewUser, {data, loading, error}] = useMutation(USERS.add);
  useEffect(() => {
    console.log({data, loading, error});
  }, [data, loading, error]);

  useEffect(() => {
    console.log({taksData, loadingTask});
  }, [taksData, loadingTask]);
  return (
    <View>
      <Text>User Page</Text>
      <TextInput
        value={user}
        onChangeText={text => {
          setUser(text);
        }}
      />
      <Button
        title={'Save new User'}
        onPress={() => {
          addNewUser({
            variables: {
              name: user,
            },
          });
        }}
      />
    </View>
  );
};
const App = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {
    // callRates();
  }, []);

  const renderPage = p => {
    switch (p) {
      case 'user':
        setPage('home');
        break;
      case 'home':
      default:
        setPage('user');
        break;
    }
  };
  const name = () => (page !== 'home' ? 'Home' : 'User');
  return (
    <View>
      <Text>Graph Apps</Text>
      <Button
        title={`Switch ${name()}`}
        onPress={() => {
          renderPage(page);
        }}
      />
      {page === 'home' ? (
        <GraphProvider>
          <Home />
        </GraphProvider>
      ) : (
        <LocalProvider>
          <User />
        </LocalProvider>
      )}
    </View>
  );
};

export default App;
