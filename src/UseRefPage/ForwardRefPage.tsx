import { Box } from '@mui/material'
import { forwardRef, useRef } from 'react'
import { PageHeader } from '../CommonPage/PageHeader'

const FocusInput = forwardRef<HTMLInputElement>(
  (props, ref) => {
    return <input type="text" placeholder="focus here" ref={ref}/>
  }
)

export function ForwardRefPage() {
  const inputRef = useRef({} as HTMLInputElement)

  function inputFocus() {
    return inputRef.current.focus()
  }

  return (
    <>
      <PageHeader title="useRef pattern -forwardRef-"/>

      <Box sx={{ p: 2 }}>
        <FocusInput
          ref={inputRef}
        />
        <button onClick={inputFocus}>
          push!
        </button>
      </Box>
    </>
  )
}