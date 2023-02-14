import { Box } from '@mui/material'
import React, {useContext, useEffect, useLayoutEffect} from 'react'
import { Context } from '../store/appContext'

const Welcome = () => {
  const newTitle = "Test change title"
  const {store, actions} = useContext(Context)
  useLayoutEffect(() => {
    document.title = newTitle
  }, [])
  return (
    <Box className='d-flex align-items-center h-100 justify-content-center'>
      {store.language=="spanish"?
    <Box>Spanish</Box>  
    :
    <Box>English</Box>  
    }
    </Box>
  )
}

export default Welcome