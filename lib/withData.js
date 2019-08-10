import getConfig from "next/config";
import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";
const { publicRuntimeConfig } = getConfig();
// import ApolloClient from "apollo-client";

const api = publicRuntimeConfig.API_URL;

// const client = new ApolloClient({
//   link: createHttpLink({
//     uri: `${api}`
//   }),
//   cache: null
// });

const config = {
  link: new HttpLink({
    uri: `${api}`
  })
};

export default withData(config);
