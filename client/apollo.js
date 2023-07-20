import { ApolloClient, InMemoryCache, } from '@apollo/client';
 const BASE_URL = 'http://192.168.1.198:4000/graphql';
const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
