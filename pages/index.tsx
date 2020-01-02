import React from 'react'
import { withApollo } from '../services/apolloClient'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { NextComponentType } from 'next'

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`

const Home: NextComponentType = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{`Error ${error.message}`}</div>
  }

  return <div>{data.sayHello}</div>
}

export default withApollo(Home)
