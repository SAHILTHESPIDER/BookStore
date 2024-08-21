
import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home/Home'

import Courses from './Courses/Courses'
import Signup from './component/Signup'
import Contacts from './Contact/Contacts'


export default function App() {
  return (
  <>
 <div className='dark:bg-slate-900 dark:text-white'>
  
 <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Course' element={<Courses />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/contact' element={<Contacts />}/>
  </Routes>
 </div>
  </>
  )
}