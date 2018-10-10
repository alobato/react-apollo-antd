import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'

import { GRAPHQL_ENDPOINT } from './constants/routes'
import { LOGIN } from './constants/routes'

import App from './components/App'

import 'typeface-open-sans'

const logout = client => {
  localStorage.setItem('teleris:authUser', '')
  client.resetStore()
  window.location.href = LOGIN
}

const httpLink = createHttpLink({uri: GRAPHQL_ENDPOINT})

const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('teleris:authUser')
  return { headers: {...headers, authorization: token ? `Bearer ${token}` : ''} }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (message === 'NOT_AUTHENTICATED') logout(client)
    })
  }
  if (networkError && networkError.statusCode === 401) logout(client)
})

const link = ApolloLink.from([authLink, errorLink, httpLink])

const defaultOptions = {}

const client = new ApolloClient({link, cache, defaultOptions})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
