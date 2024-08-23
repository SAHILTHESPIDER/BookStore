import { Toaster } from 'react-hot-toast';
import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import Home from './Home/Home'
import Courses from './Courses/Courses'
import Signup from './component/Signup'
import Contacts from './Contact/Contacts'
import { useAuth } from './context/AuthProvider';
import Abouts from './about/Abouts';

export default function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)


  return (
  <>
 <div className='dark:bg-slate-900 dark:text-white'>
  
 <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Course' element={authUser ? <Courses />:<Navigate to="/signup"/>}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/contact' element={<Contacts />}/>
    <Route path='/about' element={<Abouts />}/>
  </Routes>
  <Toaster />

 </div>
  </>
  )
}