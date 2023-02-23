import { Box } from '@mui/material'
import { createContext } from 'react'
import { PageHeader } from '../CommonPage/PageHeader'
import { GrandChild } from './GrandChild'

function Child() {
  return (
    <Box sx={{
      m: 2,
      backgroundColor: 'secondary.main',
      borderRadius: 4,
    }}>
      <Box sx={{ p: 2 }}>
        <div>this is child component</div>
        <GrandChild></GrandChild>
      </Box>
    </Box>
  )
}

export const MyContext = createContext('hello')

export function UseContextPage() {
  return (
    <>
      <PageHeader title="useContext pattern"></PageHeader>

      <Box sx={{
        m: 2,
        backgroundColor: 'primary.main',
        borderRadius: 4,
      }}>
        <Box sx={{ p: 2 }}>
          <div>this is parent component</div>
          <Child></Child>
        </Box>
      </Box>
    </>
  )
}