import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate=useNavigate()
    return (
        <main className='lg:h-[91vh] h-[90vh]  py-16 flex justify-center lg:pt-5 login-container mx-auto'>
              <div className='w-[400px] rounded-md h-fit   bg-white border-2  mt-5 py-10 px-8'>

                  <h1 className=' text-xl text-center font-bold text-[#5468FF]'>Login With Email</h1>

                  <form className='w-full mt-12'>
                      <div className='mb-5'>
                          <input className='w-full outline-none border-2 pl-5 rounded-xl py-3' type="email" placeholder='Email' />
                      </div>
                      <div className='mb-5'>
                          <input className='w-full outline-none border-2 pl-5 rounded-xl py-3' type="email" placeholder='Email' />
                      </div>
                      <div className='mb-4'>
                          <button className='button-29 w-full'>Login</button>
                      </div>
                      <div className='text-center'>
                          <p className='text-sm text-gray-900 font-semibold'>Don't have a account?<button onClick={()=>navigate('/register')} className='text-[#5468FF] font-bold'>Register</button></p>
                      </div>
                      

                  </form>

              </div>
            
        </main>
    );
};

export default Login;