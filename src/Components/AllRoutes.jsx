import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const AllRoutes = () => {
  return (
    <Box>
        <Routes>
            <Route path="/:id" element={<Home />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </Box>
  )
}

export default AllRoutes