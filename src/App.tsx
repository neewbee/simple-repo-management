import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import initGraphQLClient from './GraphQLClient'
import './App.css';

import { getAllRepositories, getOwnerId, createRepositoryGraphql } from './GraphQLs/repos.graphql';

const graphQLClient = initGraphQLClient();

function App() {

  const [title, setTitle] = useState('');
  const [queryTime, setQueryTime] = useState(Date.now());
  const [errMsg, setErrorMsg] = useState('');
  const { data: allRespsitoriesRes } = useQuery(['getAllRepositories', queryTime] as const, async () =>
    await graphQLClient.request(getAllRepositories)
  );
  const { data: ownerIdRes } = useQuery(['getOwnerId'] as const, async () =>
    await graphQLClient.request(getOwnerId)
  );
  const createRepositoryMutation = useMutation({
    mutationKey: ['name', 'visibility', 'ownerId'],
    mutationFn: async (variables: { name?: string, visibility?: string, ownerId?: string }) => {
      // @ts-ignore TODO
      return await graphQLClient.request(createRepositoryGraphql, variables)
    },
    onSuccess: () => {
      setErrorMsg('');
      setQueryTime(Date.now());
      setTitle('')
    },
    onError: (err) => {
      if (err instanceof Error) {
        setErrorMsg(err.message)
      }
    }
  });

  const createRepository = (v: { name?: string, visibility?: string, ownerId?: string }) => createRepositoryMutation.mutate(v);
  return (
    <div className="App">
      <ul className="App__list">
        {allRespsitoriesRes?.viewer?.repositories?.nodes?.map((node, index) => {
          return <li key={index} onClick={() => openInNewTab(node?.url)}> {node?.name} 创建时间：{node?.createdAt}</li>
        })}
      </ul>
      {errMsg && (
        <div className="App__debug">debug:
          <div onClick={() => createRepositoryMutation.reset()}>{errMsg}</div>
        </div>
      )}
      <div className="App__add">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='请输入名字'
        />
        <button onClick={() => createRepository({ ownerId: ownerIdRes?.viewer?.id, name: title, visibility: 'PUBLIC' })}>添加</button>
      </div>
    </div>
  );
}

function openInNewTab(url?: string) {
  url && window.open(url, '_blank');
}

export default App;
