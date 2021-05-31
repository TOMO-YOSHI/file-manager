import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
// Import for Redux Setting *****************
import { Provider } from 'react-redux';
import { store } from './redux/store';
// Redux Setting END ************************
// GraphQL/ApolloClient Setting *************
import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
// GraphQL/ApolloClient Setting END *********

const client = new ApolloClient<NormalizedCacheObject>({
  uri: 'http://localhost:9999/api/graphql',
  cache: new InMemoryCache(),
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);