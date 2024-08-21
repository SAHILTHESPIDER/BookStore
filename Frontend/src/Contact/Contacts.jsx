import React from 'react'
import Navbar from '../component/Navbar'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

function Contacts() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
      <Contact />
    </div>
    <Footer />
    </>
  )
}

export default Contacts