import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';

const api = process.env.API;

const config = {
  link: new HttpLink({
    uri: `${api}`
  })
};

export default withData(config);