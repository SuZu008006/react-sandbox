import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import PropsPage from '../../PropsPage/PropsPage'

describe('Props page', () => {
  it('ボタンがある', async () => {


    render(<PropsPage/>)


    expect(screen.getByRole('button', { name: 'push!' }))
      .toBeInTheDocument()
  })

  it('状態表示が初期値としてfalseと表示される', async () => {


    render(<PropsPage/>)


    expect(screen.getByText('false'))
      .toBeInTheDocument()
  })

  it('ボタンを押下すると状態表示が反転する', async () => {
    render(<PropsPage/>)


    const user = userEvent.setup()
    await act(async () => {
      await user.click(screen.getByRole('button', { name: 'push!' }))
    })


    expect(screen.queryByText('false')).not.toBeInTheDocument()
    expect(screen.getByText('true')).toBeInTheDocument()
  })
})