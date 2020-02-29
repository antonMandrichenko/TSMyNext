import React, { ReactElement } from 'react'
import CountUp from 'react-countup'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Layout from './Layout'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
      // height: 780,
    },
    header: {
      padding: '20px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
    },
    itemMenu: {
      margin: '0 10px',
    },
    container: {
      padding: '20px 0',
      height: 700,
    },
    start: {
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      margin: '30px 0',
    },
    mainTitle: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    mainPhoto: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  })
)

export default function Figures(): ReactElement {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Layout>
        <CountUp end={340} />
      </Layout>
    </div>
  )
}
