const { ApolloServer, gql } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const typeDefs = gql`
	type Quote {
		id: ID
		content: String
		author: String
	}

	type Query {
		quotes: [Quote]
	}
`;

const resolvers = {
	Query: {
        quotes: () => prisma.quote.findMany()
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(4000);