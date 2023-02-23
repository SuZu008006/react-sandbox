import { AppBar, Box, Typography } from '@mui/material'
import { useState } from 'react'

function Child(props: { title: boolean, flag: () => void }) {
  return (
    <>
      <div>this is child element :</div>
      <button onClick={props.flag}>push!</button>
      <div>---------------------------</div>
      <div>this is parent value :</div>
      <div>{props.title.toString()}</div>
    </>
  )
}

export function PropsPage() {
  const [flag, setFlag] = useState(false)

  return (
    <>
      <AppBar position="static">
        <Typography variant="h6" component="div" mx={2}>
          Props pattern
        </Typography>
      </AppBar>

      <Box sx={{ p: 2 }}>
        <Child title={flag} flag={() => setFlag(!flag)}></Child>
      </Box>
    </>
  )
}