import React, { ReactElement } from 'react'
import { green } from '@material-ui/core/colors'
import { Theme, withStyles, Button } from '@material-ui/core'

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    textTransform: 'none',
    color: theme.palette.primary.contrastText,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button)

interface Props {
  text: string
}

export default function MainButton({ text }: Props): ReactElement {
  return <ColorButton color="secondary">{text}</ColorButton>
}
