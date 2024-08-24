import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    const userInfo = { 
      email: data.Email, // Correctly mapping data.Email
      password: data.password, // Correctly mapping data.password
    };
    await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Login successfully');
          setTimeout(() => {
            document.getElementById("my_modal_3").close()
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          },3000)
          
          
        }
       
      })
      .catch((err) => {
        if (err.response) {
          toast.error('This is an error! ' + err.response.data.message);
          setTimeout(()=>{},3000)
          console.log(err);
        }
      });
  };
  
  return (
    <div>
      {/* You can open the modal using document.getElementById('my_modal_3').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <h3 className="font-bold text-lg ">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input 
                type="email" 
                placeholder='Enter your Email' 
                className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black'
                {...register("Email", { required: true })}
              />
              {errors.Email && <span>This field is required</span>}
            </div>
            {/* password */}
            <div className='mt-4 space-y-2  dark:text-black'>
              <span>Password</span>
              <br />
              <input 
                type="password" 
                placeholder='Enter your password' 
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            {/* button */}
            <div className='flex justify-around mt-4'>
              <button 
                type="submit" 
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                Login
              </button>
              <p>Not registered? <Link to="/signup" className='text-blue-500 underline cursor-pointer'>Sign Up</Link></p>
            </div>
            <Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' 
            onClick={()=>document.getElementById("my_modal_3").close()}
            >✕</Link>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
