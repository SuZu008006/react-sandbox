import { Box } from '@mui/material'
import { useContext } from 'react'
import { MyContext } from './UseContextPage'

export function GrandChild() {
  const myContext = useContext(MyContext)
  return (
    <Box sx={{
      m: 2,
      backgroundColor: 'primary.light',
      borderRadius: 4,
    }}>
      <Box sx={{ p: 2 }}>
        <div>this is grandchild component</div>
        <div>{myContext}</div>
      </Box>
    </Box>
  )
}