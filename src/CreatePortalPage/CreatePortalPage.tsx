import { Box } from '@mui/material'
import React, { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { PageHeader } from '../CommonPage/PageHeader'

export function CreatePortalPage() {
  function ModalContent(props: { onClose: () => void }) {
    return (
      <div>
        <div>
          modal dialog
        </div>
        <button type="button" onClick={props.onClose}>
          Close
        </button>
      </div>
    )
  }

  const [showModal, setShowModal] = useState(false)

  const maybeModalRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const modalRef = maybeModalRef.current!

  return (
    <>
      <PageHeader title="createPortal pattern"/>

      <Box sx={{ p: 2 }}>
        <div ref={maybeModalRef}>
          <button onClick={() => setShowModal(true)}>
            Show modal using a portal
          </button>
          {showModal && createPortal(
            <ModalContent onClose={() => setShowModal(false)}/>,
            modalRef
          )}
        </div>
      </Box>
    </>
  )
}