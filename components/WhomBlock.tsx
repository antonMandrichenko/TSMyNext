import React, { ReactElement } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Layout from './Layout'
import { Typography, Grid, Paper } from '@material-ui/core'

const heightSize = 600

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      height: heightSize,
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
      margin: '0 auto',
    },
    paper: {
      backgroundColor: '#A0BDCB',
      position: 'absolute',
      top: -5,
      left: 125,
      height: 610,
      width: 280,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gridRight: {
      position: 'relative',
      height: '100%',
    },
    gridRightTitle: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    grid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: heightSize,
    },
    typo: {
      textAlign: 'center',
    },
  })
)

interface Props {}

export default function WhomBlock({}: Props): ReactElement {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Layout>
        <Grid container={true} direction="row" justify="center">
          <Grid item={true} xs={4} className={classes.grid}>
            <div>
              <Typography className={classes.title}>Начни</Typography>
              <Typography className={classes.title}>зарабатывать</Typography>
              <Typography className={classes.title}>больше спустя</Typography>
              <Typography className={classes.title}>всего 2 месяца</Typography>
            </div>
          </Grid>
          <Grid item={true} xs={4} className={classes.grid}>
            <div>
              <Typography className={classes.typo}>
                Для кого этот курс
              </Typography>
              <div className={classes.textFront}>
                Front-end разработчики, с коммерческим опытом, котрые хотят
                повысить знания, освоить новые на более сложных задачах и
                повысить свой статус как специалиста, зп либо перейти на новую
                работу с более высокой зп
              </div>
            </div>
          </Grid>
          <Grid item={true} xs={4} className={classes.gridRight}>
            <Paper variant="outlined" className={classes.paper}>
              <Typography className={classes.gridRightTitle}>
                Базовые требования
              </Typography>
              {}
              <Typography variant="h6" gutterBottom={true}>
                Опыт работы
              </Typography>
              <img
                src={require('../assets/programmer_icon.png')}
                alt="programmer"
              />
              <Typography className={classes.gridRightTitle}>
                от 1 года
              </Typography>
              <Typography variant="h6" gutterBottom={true}>
                Знание английского
              </Typography>
              <img src={require('../assets/uk-flag_icon.png')} alt="flag" />
              <Typography className={classes.gridRightTitle}>
                intermediate
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </div>
  )
}
