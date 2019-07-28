import { withData } from "next-apollo";
import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

const api = process.env.API;
const cache = new InMemoryCache();

const client = new ApolloClient({
  link: createHttpLink({
    uri: `${api}`
  }),
  cache
});

export default withData(client);
