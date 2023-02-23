import { Box } from '@mui/material'
import React, { useRef } from 'react'
import { PageHeader } from '../CommonPage/PageHeader'

export default function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null)

  function inputFocus() {
    console.log(inputRef)
    if (inputRef.current) {
      return inputRef.current.focus()
    }
    return null
  }

  return (
    <>
      <PageHeader title="useRef pattern"/>

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