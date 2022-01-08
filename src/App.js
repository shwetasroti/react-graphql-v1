import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Missions from './Missions';
import './App.css';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-info">
        <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
      </nav>
      <div>
        <Missions />
      </div>
    </div>
  </ApolloProvider>
)


export default App;
