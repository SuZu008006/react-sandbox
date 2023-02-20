import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreatePortalPage } from './createPortal/CreatePortalPage'
import UseRefPage from './useRef/UseRefPage'

function App() {
  return (
    <div id="modal">
      <Routes>
        <Route
          path="/useRef"
          element={
            <UseRefPage/>
          }
        />
        <Route
          path="/createPortal"
          element={
            <CreatePortalPage/>
          }
        />
      </Routes>
    </div>
  )
}

export default App
