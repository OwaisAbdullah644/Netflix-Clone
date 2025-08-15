import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import OutLet from './pages/OutLet'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SignUpPlatform from './pages/SignUpPlatform'
<<<<<<< HEAD
import Registration from './pages/Registration'
import { style } from 'framer-motion/client'
import RegForm from './pages/RegForm'
=======
>>>>>>> ec74a49276fb50ea52205340d5944dccc3de2feb

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
<<<<<<< HEAD
        <Route path='/registration' element={<Registration step={<> STEP <span className='font-medium'>2</span> OF <span className='font-medium'>3</span> </>} setting={<> <p>Finish setting up your <br /> account</p> </>} personalized={<> <p>Netflix is personalized for you. <br /> Create a password to watch on <br /> any device at any time.</p> </>}/>}></Route>
        <Route path='/regForm' element={<RegForm step={<> STEP <span className='font-medium'>2</span> OF <span className='font-medium'>3</span> </>} member={<>Create a password to start <br /> your membership </>} paperwork={<> Just a few more steps and you're done! <br />
We hate paperwork, too. </>}/>}/>
=======
>>>>>>> ec74a49276fb50ea52205340d5944dccc3de2feb
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
