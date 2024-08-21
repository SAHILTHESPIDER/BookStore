import React from 'react';

function Contact() {
  return (
    <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12'>
   <div className='w-full md:w-1/2 mt-12 md:mt-32 '>
          <h1 className='text-5xl'>Contact Us</h1>

          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br />
            <input 
              type="text" 
              placeholder='Enter your Name' 
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
          </div>

          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input 
              type="email" 
              placeholder='Enter your Email' 
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
          </div>

          <div className='mt-4 space-y-2'>
            <span>Contact Number</span>
            <br />
            <input 
              type="text" 
              placeholder='Enter your Number' 
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
          </div>
          <div className='mt-4 space-y-2'>
            <span>Get To Know</span>
            <br />
            <input 
              type="text" 
              placeholder='Enter your Message' 
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
          </div>
          <div className="flex mx-10 mt-4">
  <button className="bg-pink-500 border rounded-md p-2 text-white">Submit</button>
</div>          
        </div>
        <div className="w-full md:w-1/2 mt-24 flex flex-col justify-start border-l-2 border-slate-800 pl-4">
  <h1 className="text-5xl mb-4">Get To Know</h1>
  <div className="flex items-center">
    
    <p className='mt-4'>Email: sahilgupta9594@gmail.com</p>
    
  </div>
  <div className="flex items-center mt-3">
    
    <p>Mobile Number:8097759738 </p>
    
  </div>
</div>

      </div>
    </>
  );
}

export default Contact;
