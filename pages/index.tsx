import { withApollo } from '../services/apolloClient'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { NextComponentType } from 'next'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from '../utils/theme'
import Button from '@material-ui/core/Button'
import Main from '../components/Main'

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

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Main />
        <Button variant="contained">Default</Button>
        <div>Go west</div>
        <div>{data.sayHello}</div>
      </MuiThemeProvider>
    </>
  )
}

export default withApollo(Home)
