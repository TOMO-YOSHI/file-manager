import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
// Import for Redux Setting *****************
import { Provider } from 'react-redux';
import { store } from './redux/store';
// Redux Setting END ************************
// GraphQL/ApolloClient Setting *************
import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject, ApolloLink, HttpLink } from '@apollo/client';
import { onError } from 'apollo-link-error';
// GraphQL/ApolloClient Setting END *********


// const httpLink = new HttpLink({
//   uri: 'http://localhost:9999/api/graphql',
//   fetch: fetch
// });

// const cache = new InMemoryCache();

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//       )
//     );
//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });
// const link = ApolloLink.from([errorLink, httpLink]);
// const client = new ApolloClient({ link, cache });

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