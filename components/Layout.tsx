import React, { ReactElement } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
    },
  })
)

export default function Layout(props: {
  children: React.ReactNode
}): ReactElement {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        <Typography component="div">{props.children}</Typography>
      </Container>
    </React.Fragment>
  )
}
