/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\nquery getAllRepositories {\n  viewer {\n    repositories(first: 100, orderBy: {field:CREATED_AT, direction: DESC}) {\n      pageInfo {hasNextPage, endCursor}\n      nodes {\n        name\n        url\n        createdAt\n        isPrivate\n        owner {\n          login\n        }\n        defaultBranchRef {\n          name\n        }\n      }\n    }\n  }\n}\n": types.GetAllRepositoriesDocument,
    "\nquery getOwnerId {\n  viewer {\n    id\n  }\n}\n": types.GetOwnerIdDocument,
    "\nmutation createRepository($name: String = \"\", $visibility: RepositoryVisibility = PUBLIC, $ownerId: ID = \"MDQ6VXNlcjEzNzc3OTQw\") {\ncreateRepository(input: {name: $name, visibility: $visibility, ownerId: $ownerId}) {\n   repository {\n     url\n   }\n }\n}\n": types.CreateRepositoryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getAllRepositories {\n  viewer {\n    repositories(first: 100, orderBy: {field:CREATED_AT, direction: DESC}) {\n      pageInfo {hasNextPage, endCursor}\n      nodes {\n        name\n        url\n        createdAt\n        isPrivate\n        owner {\n          login\n        }\n        defaultBranchRef {\n          name\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery getAllRepositories {\n  viewer {\n    repositories(first: 100, orderBy: {field:CREATED_AT, direction: DESC}) {\n      pageInfo {hasNextPage, endCursor}\n      nodes {\n        name\n        url\n        createdAt\n        isPrivate\n        owner {\n          login\n        }\n        defaultBranchRef {\n          name\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getOwnerId {\n  viewer {\n    id\n  }\n}\n"): (typeof documents)["\nquery getOwnerId {\n  viewer {\n    id\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation createRepository($name: String = \"\", $visibility: RepositoryVisibility = PUBLIC, $ownerId: ID = \"MDQ6VXNlcjEzNzc3OTQw\") {\ncreateRepository(input: {name: $name, visibility: $visibility, ownerId: $ownerId}) {\n   repository {\n     url\n   }\n }\n}\n"): (typeof documents)["\nmutation createRepository($name: String = \"\", $visibility: RepositoryVisibility = PUBLIC, $ownerId: ID = \"MDQ6VXNlcjEzNzc3OTQw\") {\ncreateRepository(input: {name: $name, visibility: $visibility, ownerId: $ownerId}) {\n   repository {\n     url\n   }\n }\n}\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;