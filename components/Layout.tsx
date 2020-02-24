import React, { ReactElement } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

export default function Layout(props: {
  children: React.ReactNode
}): ReactElement {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div">{props.children}</Typography>
      </Container>
    </React.Fragment>
  )
}
