import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import initGraphQLClient from './GrapgQLConfig'
import './App.css';
import { graphql } from './gql/gql';


const getAllRepositories = graphql(`
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

const graphQLClient = initGraphQLClient();

function App() {
  const { data } = useQuery(['getAllRepositories'] as const, async () =>
      await graphQLClient.request(getAllRepositories)
  );

  return (
    <div className="App">
      <ul className="App__list">
      {data?.viewer?.repositories?.nodes?.map((e, index) => {
        return <li key={index} onClick={() => openInNewTab(e?.url)}> {e?.name} 创建时间：{e?.createdAt}</li>
      })}
      </ul>
    </div>
  );
}

function openInNewTab(url?: string) {
  url && window.open(url, '_blank');
}

export default App;
