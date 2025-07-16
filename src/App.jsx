import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import OutLet from './pages/OutLet'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SignUpPlatform from './pages/SignUpPlatform'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<OutLet/>}>
        <Route index element={<Login />} />
        </Route>
        <Route path='/platform' element={<SignUpPlatform/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
