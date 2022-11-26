import { graphql } from '../gql/gql';

export const getAllRepositories = graphql(`
query getAllRepositories {
  viewer {
    repositories(first: 100, orderBy: {field:CREATED_AT, direction: DESC}) {
      pageInfo {hasNextPage, endCursor}
      nodes {
        name
        url
        createdAt
        isPrivate
        owner {
          login
        }
        defaultBranchRef {
          name
        }
      }
    }
  }
}
`)

export const getOwnerId = graphql(`
query getOwnerId {
  viewer {
    id
  }
}
`)

export const createRepositoryGraphql = graphql(`
mutation createRepository($name: String = "", $visibility: RepositoryVisibility = PUBLIC, $ownerId: ID = "MDQ6VXNlcjEzNzc3OTQw") {
createRepository(input: {name: $name, visibility: $visibility, ownerId: $ownerId}) {
   repository {
     url
   }
 }
}
`)
