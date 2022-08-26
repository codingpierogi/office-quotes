const { ApolloServer, gql } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

// const data = {
//   "beasts": [
//     {
// 	    "id": "md",
// 	    "legs": 6,
// 	    "binomial": "Musca domestica",
// 	    "commonName": "housefly",
//     },
//     {
// 	    "id": "nr",
// 	    "legs": 8,
// 	    "binomial": "Neriene radiata",
// 	    "commonName": "filmy dome spider",
//     },
//     {
// 	    "id": "cc",
// 	    "legs": 2,
// 	    "binomial": "Corvus corone",
// 	    "commonName": "carrion crow",
//     },
//     {
// 	    "id": "fc",
// 	    "legs": 4,
// 	    "binomial": "Felis catus",
// 	    "commonName": "cat",
//     }
//   ]
// };

const prisma = new PrismaClient();

// const typeDefs = gql`
// 	type Beast {
// 		id: ID
// 		legs: Int
// 		binomial: String
// 		commonName: String
// 	}

// 	type Query {
// 		beasts: [Beast]
// 	}
// `;

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
		// Returns array of all beasts.
		// beasts: () => data.beasts
        quotes: () => prisma.quote.findMany()
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(4000);