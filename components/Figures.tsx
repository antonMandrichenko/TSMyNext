import React, { ReactElement } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Layout from './Layout'
import Figure from './Figure'
import { FiguresTypes } from '../interfaces'

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

const figures: FiguresTypes[] = [
  { title: 'Лекции', number: 20, text: 'часов' },
  { title: 'Практика', number: 120, text: 'часов' },
  { title: 'Группы до', number: 10, text: 'человек' },
  { title: 'Поддержка ментора', number: '∞', text: 'неограниченно' },
]

export default function Figures(): ReactElement {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Layout>
        <Grid container={true}>
          {figures.map(figure => (
            <Figure key={figure.title} figure={figure} />
          ))}
        </Grid>
      </Layout>
    </div>
  )
}
