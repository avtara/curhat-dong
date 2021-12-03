import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client'
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
	uri: "wss://curhatdong.hasura.app/v1/graphql",
	options: {
		reconnect: true,
		connectionParams: {
			headers: {
				"x-hasura-admin-secret":
					"1idRYLmcCtEqzUqfgiulM3YRfrK5tmw5d3ytwTzSrDsM8H7K6QEz7dl02Hdu05ab",
			},
		},
	},
});

const httpLink = new HttpLink({
	uri: "https://curhatdong.hasura.app/v1/graphql",
	headers: {
		"x-hasura-admin-secret":
			"1idRYLmcCtEqzUqfgiulM3YRfrK5tmw5d3ytwTzSrDsM8H7K6QEz7dl02Hdu05ab",
	},
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

export default client;