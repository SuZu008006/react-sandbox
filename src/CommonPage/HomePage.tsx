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
          <Link href={'/props'}>props pattern</Link>
        </ListItem>
        <ListItem>
          <Link href={'/useContext'}>useContext pattern</Link>
        </ListItem>
        <ListItem>
          <Link href={'/useRef'}>useRef pattern</Link>
          <List>
            <ListItem>
              <Link href={'/useRef/forwardRef'}>forwardRef</Link>
            </ListItem>
            <ListItem>
              <Link href={'/useRef/useImperativeHandle'}>useImperativeHandle</Link>
            </ListItem>
            <ListItem>
              <Link href={'/useRef/keyboardEvent'}>keyboardEvent</Link>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <Link href={'/createPortal'}>createPortal pattern</Link>
        </ListItem>
        <ListItem>
          <Link href={'/css'}>css sanbox</Link>
        </ListItem>
      </List>
    </>
  )
}