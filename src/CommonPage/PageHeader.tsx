import { AppBar, Link, List, ListItem, Typography } from '@mui/material'
import React from 'react'

export function PageHeader(props: { title: string }) {
  return (
    <>
      <AppBar position="static">
        <Typography variant="h6" component="div" mx={2}>
          {props.title}
        </Typography>
      </AppBar>
      <List>
        <ListItem>
          <Link href={'/'}>back</Link>
        </ListItem>
      </List>
    </>
  )
}