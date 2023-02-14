import React, {useEffect, useLayoutEffect} from 'react'

const Welcome = () => {
  const newTitle = "Test change title"

  useLayoutEffect(() => {
    document.title = newTitle
  }, [])
  return (
    <div>Welcome</div>
  )
}

export default Welcome