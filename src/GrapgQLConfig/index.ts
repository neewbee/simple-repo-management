import { GraphQLClient } from 'graphql-request';

import { GITHUB_CLASSIC_TOKEN, GITHUB_END_POINT }from '../Consts/github.config';

const initGraphQLClient = () => new GraphQLClient(GITHUB_END_POINT, {
  headers: {
    Authorization: `bearer ${GITHUB_CLASSIC_TOKEN}`,
  },
})

export default initGraphQLClient;
