import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  split,
  createHttpLink,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { API_URL, WS_URL } from "../constants/environment";

interface ApolloClientBuilderParams {
  externalToken?: string;
}

const uri = `${API_URL}/graphql`;

export const clientBuilder = (options?: ApolloClientBuilderParams) => {
  let httpLink = createHttpLink({
    uri,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: options?.externalToken
          ? `Bearer ${options?.externalToken}`
          : undefined,
      },
    };
  });

  httpLink = authLink.concat(httpLink);

  const wsUri = `${WS_URL}/graphql`;

  const wsLink = new WebSocketLink({
    uri: wsUri,
    options: {
      reconnect: true,
      connectionParams: {
        Authorization: `Bearer ${null}`,
      },
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
  });

  return client;
};

export default function ApolloProvider(props: any) {
  return (
    <Provider
      client={clientBuilder({
        externalToken: props.token,
      })}
      {...props}
    />
  );
}
