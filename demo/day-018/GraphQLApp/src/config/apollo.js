import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

const GraphProvider = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

const LocalClient = new ApolloClient({
  uri: 'http://192.168.0.115:8090/v1/graphql',
  cache: new InMemoryCache(),
});
const LocalProvider = ({children}) => {
  return <ApolloProvider client={LocalClient}>{children}</ApolloProvider>;
};
export {GraphProvider, LocalProvider, LocalClient};
export default client;
