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
  text?: string
  size?: string
}

export default function MainButton({ text, size }: Props): ReactElement {
  return (
    <ColorButton
      color="secondary"
      style={{ padding: size && '12px 60px', margin: size && '30px 0' }}
    >
      {text}
    </ColorButton>
  )
}
