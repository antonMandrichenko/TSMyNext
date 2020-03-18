import React, { ReactElement } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      height: 150,
      marginBottom: '2rem'
    },
    typo: {
      marginTop: '1rem',
    },
  })
)

interface Prop {
  src: any
  title: string
}

export default function TechStackElem({ src, title }: Prop): ReactElement {
  const classes = useStyles()

  return (
    <Grid item={true} xs={2} className={classes.root}>
      <img src={src} alt={title} />
      <Typography className={classes.typo}>{title}</Typography>
    </Grid>
  )
}
