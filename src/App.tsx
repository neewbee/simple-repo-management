import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import initGraphQLClient from './GrapgQLConfig'
import './App.css';
import { graphql } from './gql/gql';


const postsQueryDocument = graphql(`
  query postsQueryDocument {
    viewer {
      login
    }
  }
`)

const graphQLClient = initGraphQLClient();

function App() {
  const { data } = useQuery(['postsQueryDocument'] as const, async () =>
      await graphQLClient.request(postsQueryDocument)
  );
  console.log('dat', data)

  return (
    <div className="App">
    </div>
  );
}

export default App;
