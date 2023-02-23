import { Box } from '@mui/material'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import { PageHeader } from '../CommonPage/PageHeader'

interface Handler {
  setFocus(): void;
}

const FocusInput = forwardRef<Handler>(
  (props, ref) => {
    const inputRef = useRef({} as HTMLInputElement)
    useImperativeHandle(ref, () => {
      return {
        setFocus(): void {
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }
      }
    })

    return <input type="text" placeholder="focus here" ref={inputRef}/>
  }
)

export function UseImperativeHandlePage() {
  const inputRef = useRef({} as Handler)

  function inputFocus() {
    if (inputRef.current) {
      return inputRef.current.setFocus()
    }
    return null
  }

  return (
    <>
      <PageHeader title="useRef pattern -useImperativeHandle-"/>

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