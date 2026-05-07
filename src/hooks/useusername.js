import { useState, useEffect } from 'react'

export function useUserName() {
  const [userName, setUserName] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('userName')
    if (stored) {
      setUserName(stored)
    } else {
      setShowModal(true)
    }
  }, [])

  const handleModalClose = (name) => {
    setUserName(name)
    setShowModal(false)
  }

  return { userName, showModal, handleModalClose }
}
