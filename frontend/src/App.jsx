import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home'
import AuthLayout from "./layout/AuthLayout"
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
