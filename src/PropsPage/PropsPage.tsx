import { Box } from '@mui/material'
import React, { useState } from 'react'
import { PageHeader } from '../CommonPage/PageHeader'

function Child(props: { title: boolean, flag: () => void }) {
  return (
    <>
      <div>this is child element :</div>
      <button onClick={props.flag}>push!</button>
      <div>---------------------------</div>
      <div>this is parent value :</div>
      <div>{props.title.toString()}</div>
    </>
  )
}

export default function PropsPage() {
  const [flag, setFlag] = useState(false)

  return (
    <>
      <PageHeader title="props pattern"/>

      <Box sx={{ p: 2 }}>
        <Child title={flag} flag={() => setFlag(!flag)}></Child>
      </Box>
    </>
  )
}