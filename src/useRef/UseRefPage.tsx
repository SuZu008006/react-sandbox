import React, { useRef } from 'react'

export default function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <input
        ref={inputRef}
        placeholder="押されるとフォーカス"
      />
      <button onClick={() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }}>おす
      </button>
    </>
  )
}