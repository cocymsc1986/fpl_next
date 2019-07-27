import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const api = process.env.API;
const cache = new InMemoryCache();

const config = {
  link: new HttpLink({
    uri: `${api}`
  }),
  cache
};

export default withData(config);
