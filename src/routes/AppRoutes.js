import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ShowSummary from '../components/shows/ShowSummary'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<ShowSummary />}/>
    </Routes>
  )
}

export default AppRoutes