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
      height: '20vh',
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
    <Layout>
      <Grid
        container={true}
        className={classes.root}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {figures.map(figure => (
          <Figure key={figure.title} figure={figure} />
        ))}
      </Grid>
    </Layout>
  )
}
