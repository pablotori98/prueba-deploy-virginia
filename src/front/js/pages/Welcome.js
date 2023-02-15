import { Box } from '@mui/material'
import React, {useContext, useEffect, useLayoutEffect} from 'react'
import { FaqEnglish } from '../components/faq/FaqEnglish.jsx'
import { FaqSpanish } from '../components/faq/FaqSpanish.jsx'
import { JumbotronHome } from '../components/jumbotron/JumbotronHome.jsx'
import { Context } from '../store/appContext'

const Welcome = () => {
  const {store, actions} = useContext(Context)
  const newTitle = "Home"
  useLayoutEffect(() => {
    document.title = newTitle
  }, [])
  return (
    <Box>
      {store.language=="spanish"?

    <Box className='d-flex flex-column align-items-center'>
      {/* <Box>Spanish</Box> */}
      <JumbotronHome/>
      {/* <FaqSpanish/>   */}
    </Box>
    :
    <Box className='d-flex flex-column align-items-center'>
      <Box>English</Box>  
      {/* <FaqEnglish/> */}
    </Box>
    }
    </Box>
  )
}

export default Welcome