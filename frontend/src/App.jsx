import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
const App = () => {
  return (
    <div>
      <Router>
        <Routes path="/" element={<MainLayout/>}>
         <Route />
        </Routes>
      </Router>
    </div>
  )
}

export default App
