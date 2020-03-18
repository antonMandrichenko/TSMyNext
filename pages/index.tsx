import { withApollo } from '../services/apolloClient'
import { NextComponentType } from 'next'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from '../utils/theme'
import Main from '../components/Main'
import Figures from '../components/Figures'
import WhomBlock from '../components/WhomBlock'
import TechStack from '../components/TechStack'

const Home: NextComponentType = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Main />
        <Figures />
        <WhomBlock />
        <TechStack />
      </MuiThemeProvider>
    </>
  )
}

export default withApollo(Home)
