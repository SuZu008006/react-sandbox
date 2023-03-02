import { Box } from '@mui/material'
import React, { createRef, RefObject, useEffect, useRef, useState } from 'react'
import { PageHeader } from '../CommonPage/PageHeader'

export default function UseRefKeyboardEventPage() {
  const buttonTitles = ['AAA', 'BBB', 'CCC']
  const buttonRefs = useRef<RefObject<HTMLDivElement>[]>([])

  buttonTitles.forEach((_, index) => {
    buttonRefs.current[index] = createRef<HTMLDivElement>()
  })

  const [focusButtonIndex, setFocusButtonIndex] = useState(0)

  useEffect(() => {
    buttonRefs.current[focusButtonIndex].current!.focus()
  }, [focusButtonIndex])

  return (
    <div
      onKeyDown={(e) => {
        if (e.key === 'ArrowUp') {
          setFocusButtonIndex((prevState) => {
            if (0 <= --prevState) {
              return prevState
            }
            return buttonRefs.current.length - 1
          })
        } else if (e.key === 'ArrowDown') {
          setFocusButtonIndex((prevState) => {
            if (++prevState <= (buttonRefs.current.length - 1)) {
              return prevState
            }
            return 0
          })
        }
      }}
    >
      <PageHeader title="useRef pattern -keyBoard event-"/>

      <Box sx={{ p: 2 }}>
        <div>press key 'arrowUp' or 'arrowDown'</div>
        {buttonTitles.map((title, index) => (
          <div
            tabIndex={index}
            key={index}
            ref={buttonRefs.current[index]}
            style={{display:'flex'}}
            onFocus={()=>{console.log("フォーカス！")}}
          >
            {title}
          </div>
        ))}
      </Box>
    </div>
  )
}