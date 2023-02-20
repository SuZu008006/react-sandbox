import { AppBar, Box, Typography } from '@mui/material'
import React, { useRef } from 'react'

export default function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null)

  function inputFocus() {
    if (inputRef.current) {
      return inputRef.current.focus()
    }
    return null
  }

  return (
    <>
      <AppBar position="static">
        <Typography variant="h6" component="div" mx={2}>
          UseRef pattern
        </Typography>
      </AppBar>
      <Box sx={{ p: 2 }}>
        <input
          ref={inputRef}
          placeholder="focus here"
        />
        <button onClick={() => inputFocus()}>
          push!
        </button>
      </Box>
    </>
  )
}