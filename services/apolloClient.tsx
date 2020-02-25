import ApolloClient from 'apollo-boost'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import { NextPage, NextPageContext } from 'next'
import fetch from 'isomorphic-fetch'
import { getDataFromTree } from '@apollo/react-ssr'
import { InMemoryCache } from 'apollo-cache-inmemory'

export function withApollo(PageComponent: NextPage): NextPage {
  const WithApollo = (props: any) => {
    const client = props.apolloClient || initApolloClient(props.apolloState)
    return (
      <ApolloProvider client={client}>
        <PageComponent {...props} />
      </ApolloProvider>
    )
  }

  WithApollo.getInitialProps = async (ctx: NextPageContext) => {
    const { AppTree } = ctx
    const apolloClient = initApolloClient()
    let pageProps = {}

    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx)
    }

    if (typeof window === 'undefined') {
      if (ctx.res && ctx.res.finished) {
        return pageProps
      }

      try {
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient,
            }}
          />
        )
      } catch (e) {
        // tslint:disable-next-line:no-console
        console.error(e)
      }

      Head.rewind()
    }
    const apolloState = apolloClient.cache.extract()
    return {
      ...pageProps,
      apolloState,
    }
  }

  return WithApollo
}
const initApolloClient = (initState = {}) => {
  const cache = new InMemoryCache().restore(initState)
  const client = new ApolloClient({
    uri:
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3000/api/graphql`
        : `https://sad-kowalevski-2f6dda.netlify.com/api/graphql`,
    fetch,
    cache,
  })
  return client
}
