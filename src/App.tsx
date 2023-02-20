import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseRefPage from './useRef/UseRefPage'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <UseRefPage/>
          }
        />
      </Routes>
    </>
  )
}

export default App
