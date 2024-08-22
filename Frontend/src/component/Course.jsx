import React, { useEffect, useState } from 'react'
import Cards from './Cards'
// import list from "../../public/list.json"
import { Link } from 'react-router-dom'
import axios from "axios"
// import { getBook } from '../../../Backend/Controller/Book.controller'

function Course() {
const [book,setBooks]=useState([])
useEffect(()=>{
  const getBook=async ()=>{
    try {
      const res=await axios.get("http://localhost:4001/book");
      setBooks(res.data);
    } catch (error) {
      console.log(error)
    }
  };

getBook();
  
},[]);

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <div className=' mt-16 pt-12 items-center justify-center text-center'>
      <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
      <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sapiente quasi placeat quibusdam velit amet error voluptatibus enim, aliquid nihil aperiam repellat atque qui culpa.
           Ab repudiandae optio deserunt impedit illum!</p>
          <Link to="/">
           <button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-700 duration-300  '>Back</button>
           </Link>
    </div>
    <div className='mt-12n grid grid-cols-1 md:grid-cols-4 '>
      {
         book.map((item)=>(<Cards key={item} item={item}/>))
         
      }
    </div>
    </div>
    </>
  )
}

export default Course