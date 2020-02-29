import React, { ReactElement } from 'react'
import CountUp from 'react-countup'
import { FiguresTypes } from '../interfaces'
import { Typography, Grid, makeStyles, createStyles } from '@material-ui/core'

interface Props {
  figure: FiguresTypes
}

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      textAlign: 'center',
    },
  })
)

export default function Figure({ figure }: Props): ReactElement {
  const classes = useStyles()
  return (
    <Grid item={true} xs={3}>
      <Typography variant="h6" className={classes.paper}>
        {figure.title}
      </Typography>
      <Typography variant="h2" className={classes.paper}>
        {' '}
        {typeof figure.number === 'number' ? (
          <CountUp start={1} end={figure.number} delay={1} />
        ) : (
          figure.number
        )}
      </Typography>
      <Typography variant="body1" className={classes.paper}>
        {figure.text}
      </Typography>
    </Grid>
  )
}
