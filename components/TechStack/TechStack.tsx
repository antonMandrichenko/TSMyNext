import React, { ReactElement } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Layout from '../Layout'
import images, { ImagesOptions } from '../../assets'
import TechStackElem from './TechStackElem'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
      padding: '0 4rem',
    },
    typo: {
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      margin: '3rem 0',
    },
  })
)
const imagesSrc = [
  { title: 'bower' },
  { title: 'express' },
  { title: 'node' },
  { title: 'next' },
  { title: 'handlebars' },
  { title: 'git' },
  { title: 'eslint' },
  { title: 'nginx' },
  { title: 'heroku' },
  { title: 'gulp' },
  { title: 'circleCI' },
  { title: 'babel' },
]

export default function TechStack(): ReactElement {
  const classes = useStyles()

  const imageSelect = (key: string) => {
    const imagesObject: ImagesOptions = {
      bower: images.bower,
      express: images.express,
      node: images.node,
      next: images.next,
      handlebars: images.handlebars,
      git: images.git,
      eslint: images.eslint,
      nginx: images.nginx,
      heroku: images.heroku,
      gulp: images.gulp,
      circleCI: images.circleCi,
      babel: images.babel,
    }
    return imagesObject[key]
  }

  return (
    <Layout>
      <Typography className={classes.typo}>Будем использовать</Typography>
      <Grid
        container={true}
        className={classes.root}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <React.Fragment>
          {imagesSrc.map(image => (
            <TechStackElem
              key={image.title}
              src={imageSelect(image.title)}
              title={image.title}
            />
          ))}
        </React.Fragment>
      </Grid>
    </Layout>
  )
}
