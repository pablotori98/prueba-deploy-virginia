import { Box } from '@mui/material'
import React from 'react'
import { renderPage } from './SideBarData'

const OpenSideBar = () => {
  return (
    <Box sx={{
      marginTop:"4rem",
      height:"95%",
      width:"100%"
    }}>{renderPage(false)}</Box>
  )
}

export default OpenSideBar