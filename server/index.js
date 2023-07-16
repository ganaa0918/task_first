const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Post {
    id: Int!
    name: String
    title: String
  }

  type Query {
    posts: [Post]
  }

`;

const posts = [
  {
    id: 1,
    name: 'Jany',
    title: 'Good',
  },
  {
    id: 2,
    name: 'Kong',
    title: 'Nice job',
  },
];

const resolvers = {
  Query: {
    posts: () => posts,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
