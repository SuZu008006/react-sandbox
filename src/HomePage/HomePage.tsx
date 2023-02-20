import { AppBar, Link, List, ListItem, Typography } from '@mui/material'

export function HomePage() {
  return (
    <>
      <AppBar position="static">
        <Typography variant="h6" component="div" mx={2}>
          React function list
        </Typography>
      </AppBar>
      <List>
        <ListItem>
          <Link href={'/useRef'}>useRef pattern</Link>
        </ListItem>
        <ListItem>
          <Link href={'/createPortal'}>createPortal pattern</Link>
        </ListItem>
      </List>
    </>
  )
}