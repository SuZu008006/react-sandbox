import { Box } from '@mui/material'
import { useRef } from 'react'
import { PageHeader } from '../CommonPage/PageHeader'

function FocusInput(props: { ref: any }) {
  return <input type="text" ref={props.ref}/>
}

export function ForwardRefPage() {
  const inputRef = useRef<HTMLInputElement>(null)

  function inputFocus() {
    if (inputRef.current) {
      return inputRef.current.focus()
    }
    return null
  }

  return (
    <>
      <PageHeader title="useRef pattern"/>

      <Box sx={{ p: 2 }}>
        <FocusInput
          ref={inputRef}
        />
        <button onClick={() => inputFocus()}>
          push!
        </button>
      </Box>
    </>
  )
}