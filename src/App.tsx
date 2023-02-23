import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreatePortalPage } from './CreatePortalPage/CreatePortalPage'
import { HomePage } from './HomePage/HomePage'
import { PropsPage } from './PropsPage/PropsPage'
import UseRefPage from './UseRefPage/UseRefPage'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage/>
          }
        />
        <Route
          path="/props"
          element={
            <PropsPage/>
          }
        />
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
    </ThemeProvider>
  )
}

export default App
