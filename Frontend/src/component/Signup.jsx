import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();  // Ensure useNavigate is invoked correctly
  const { from } = location.state || { pathname: '/' };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = { 
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log(res.data);

      if (res.data) {
        toast.success('Signup successfully');
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from, { replace: true });  // Ensure navigate is used correctly
      }
    } catch (err) {
      if (err.response) {
        toast.error('This is an error! ' + err.response.data.message);
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</Link>

              <h3 className="font-bold text-lg">Sign Up</h3>

              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input 
                  type="text" 
                  placeholder='Enter your fullname' 
                  className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black'
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && <span>This field is required</span>}
              </div>

              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input 
                  type="email" 
                  placeholder='Enter your Email' 
                  className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black'
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>

              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input 
                  type="password" 
                  placeholder='Enter your password' 
                  className='w-80 px-3 py-1 border rounded-md outline-none dark:text-black'
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>

              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                  Sign Up
                </button>
                <p className='text-xl'>
                  Have an account? 
                  <span 
                    className='text-blue-500 underline cursor-pointer' 
                    onClick={() => document.getElementById("my_modal_3").showModal()}>
                    Login
                  </span>
                </p>
              </div>
            </form>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
