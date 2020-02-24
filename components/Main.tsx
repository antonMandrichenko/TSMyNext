import React, { ReactElement } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Layout from './Layout'
import { Typography, Grid, Button, withStyles } from '@material-ui/core'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import MainFoto from './MainPhoto'
import MainButton from './UI/MainButton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
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
  })
)

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    textTransform: 'none',
    color: theme.palette.primary.contrastText,
  },
}))(Button)

const headerMenuItem = [
  'О курсе',
  'Программа',
  'Цена',
  'Контакты',
  'Оформить заявку',
]

const handleChangeMenu = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  console.dir(e.target)
}

interface Props {}

export default function Main({}: Props): ReactElement {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Layout>
        <header className={classes.header}>
          <Typography variant="h6">UpworkMe.com</Typography>
          <div>
            {headerMenuItem.map(itemMenu =>
              itemMenu !== 'Оформить заявку' ? (
                <ColorButton
                  key={itemMenu}
                  onClick={handleChangeMenu}
                  className={classes.itemMenu}
                >
                  {itemMenu}
                </ColorButton>
              ) : (
                <MainButton key={itemMenu} text={itemMenu} />
              )
            )}
          </div>
        </header>
        <Grid container={true} className={classes.container}>
          <Grid item={true} xs={6} className={classes.mainTitle}>
            <Typography variant="body1" gutterBottom={true}>
              Интенсивный онлайн-курс
            </Typography>
            <Typography variant="h3" gutterBottom={true}>
              Front-End Advanced Pro
            </Typography>
            <Typography>
              Прокачай свои навыки до уровня Senior за 2 месяца практики и
              получай зарплату своей мечты!
            </Typography>
            <MainButton text="Записаться" size="large" />
            <Typography className={classes.start}>
              <EventAvailableIcon /> Старт курса 20 марта
            </Typography>
          </Grid>
          <Grid item={true} xs={6}>
            <MainFoto />
          </Grid>
        </Grid>
      </Layout>
    </div>
  )
}
