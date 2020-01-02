import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { NextPage } from 'next'
import fetch from 'isomorphic-fetch'

export function withApollo(PageComponent: NextPage): NextPage {
  const WithApollo = (props: any) => {
    const client = new ApolloClient({
      uri: 'http://localhost:3000/api/graphql',
      fetch,
    })
    return (
      <ApolloProvider client={client}>
        <PageComponent {...props} />
      </ApolloProvider>
    )
  }
  return WithApollo
}
