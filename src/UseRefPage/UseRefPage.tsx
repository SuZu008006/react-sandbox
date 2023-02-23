import { Box } from '@mui/material'
import React, { useRef } from 'react'
import { PageHeader } from '../CommonPage/PageHeader'

export default function UseRefPage() {
  const inputRef = useRef({} as HTMLInputElement)

  function inputFocus() {
    return inputRef.current.focus()
  }

  return (
    <>
      <PageHeader title="useRef pattern"/>

      <Box sx={{ p: 2 }}>
        <input
          ref={inputRef}
          placeholder="focus here"
        />
        <button onClick={inputFocus}>
          push!
        </button>
      </Box>
    </>
  )
}