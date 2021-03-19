import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useQuery} from '@apollo/client';

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

import {GraphProvider} from './src/config/apollo';
import {QUERY_RATES} from './src/config/graphql/Query/rates';

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
const App = () => {
  useEffect(() => {
    // callRates();
  }, []);
  return (
    <GraphProvider>
      <View>
        <Text>Graph Apps</Text>
        <Home />
      </View>
    </GraphProvider>
  );
};

export default App;
