import React, { ReactElement } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Layout from './Layout'
import { Typography, Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      height: 600,
    },
    title: {
      fontSize: '3rem',
      borderLeft: '2px solid white',
      fontWeight: 'bold',
      paddingLeft: '1rem',
    },
    textFront: {
      border: '2px solid white',
      borderRadius: 5,
      width: '80%',
      padding: '1.5rem',
      fontSize: '1.4rem',
      marginTop: '2rem',
    },
    paper: {
      backgroundColor: '#A0BDCB',
      position: 'absolute',
      top: -5,
      left: 125,
      height: 610,
      width: 280,
    },
    gridRight: {
      position: 'relative',
      height: '100%',
    },
  })
)

// const ColorButton = withStyles((theme: Theme) => ({
//   root: {
//     textTransform: 'none',
//     color: theme.palette.primary.contrastText,
//   },
// }))(Button)

// const headerMenuItem = [
//   'О курсе',
//   'Программа',
//   'Цена',
//   'Контакты',
//   'Оформить заявку',
// ]

// const handleChangeMenu = (
//   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
// ) => {
//   console.dir(e.target)
// }

interface Props {}

export default function WhomBlock({}: Props): ReactElement {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Layout>
        <Grid container={true} direction="row" justify="center">
          <Grid item={true} xs={4}>
            <Typography className={classes.title}>Начни</Typography>
            <Typography className={classes.title}>зарабатывать</Typography>
            <Typography className={classes.title}>больше спустя</Typography>
            <Typography className={classes.title}>всего 2 месяца</Typography>
          </Grid>
          <Grid item={true} xs={4}>
            <Typography>Для кого этот курс</Typography>
            <div className={classes.textFront}>
              Front-end разработчики, с коммерческим опытом, котрые хотят
              повысить знания, освоить новые на более сложных задачах и повысить
              свой статус как специалиста, зп либо перейти на новую работу с
              более высокой зп
            </div>
          </Grid>
          <Grid item={true} xs={4} className={classes.gridRight}>
            <Paper variant="outlined" className={classes.paper}>
              Lesss
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </div>
  )
}
