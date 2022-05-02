import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.config';
import Loading from '../../../Shared/Loading/Loading';
import Social from '../Social/Social';

const Register = () => {
    const navigate=useNavigate();
    const [registerUser]=useAuthState(auth);
    const location=useLocation();

  
    let {from} = location.state || {from: {pathname: "/"}};
    const [
        createUserWithEmailAndPassword,
        newRegisterUser,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  
    const [user,setUser]=useState({
        name:'',
        email:"",
        password:'',
        confirmPass: ""
    });
   
  
    useEffect(()=>{
        if(registerUser){
             navigate(from,{replace:true})
           
        }
    },[registerUser])
   
   
    const [errors,setErrors]=useState({
        emailError:'',
        passwordError:'',
        confirmPasserror:''
    });
    const handleNameChange=(e)=>{
      setUser({...user,name:e.target.value})
    }
    const handleEmailChange=(e)=>{
       
        const isValid = /\S+@\S+\.\S+/.test(e.target.value);
        if(isValid){
            setUser({...user,email:e.target.value}) 
            setErrors({...errors, emailError: ""}) 
               
        } else {
            const newError={...errors}
            newError.emailError="Invalid Email"
            setErrors(newError)
            setUser({...user, email: ""})
        }

        
    }

     //handle password
    const handlePasswordChange=(e)=>{
       
        const isValid = /.{6,}/.test(e.target.value);
        
        if(isValid){
            setUser({...user,password:e.target.value});
            setErrors({...errors, passwordError: ""});
        } else {
            setErrors({...errors, passwordError: "Password Must be 6 characters"});
            setUser({...user, password: ""})
        }
        
    }
    const handleConfirmPassword=(e)=>{
       
        
        
        if(user.password===e.target.value){
            setUser({...user,confirmPass:e.target.value});
            setErrors({...errors, confirmPasserror: ""});
        } else {
            setErrors({...errors, confirmPasserror: "Password not match"});
            setUser({...user, confirmPass: ""})
        }
        
    }
   
    //handle login 
    const handleRegister=async(e)=>{
        e.preventDefault()
        await createUserWithEmailAndPassword(user.email,user.confirmPass)
        await updateProfile({ displayName: user.name });
       
    }
      //loading component 
  
  if(loading){
      return   <div className=' h-[40vh] w-full flex justify-center items-center'>
       <Loading />
       </div>
  }
  //error 
  let errorElement;
  if(error){
    errorElement=<p className='text-red-900 text-sm text-center font-semibold'>{error.message}</p>
  }

    return (
        <main className=' h-fit py-16 flex justify-center lg:pt-5 login-container mx-auto'>
           
        <div className='w-[400px] rounded-md h-fit   bg-white border-2  mt-5 py-10 px-8'>
             <Social />

            <form onSubmit={handleRegister} className='w-full mt-12'>
                <div className='mb-5'>
                    <input required onChange={handleNameChange}   className='w-full outline-none border-2 pl-5 rounded-xl py-3' type="text" placeholder='Name' />
                    
                </div>
                <div className='mb-5'>
                    <input onChange={handleEmailChange}   className='w-full outline-none border-2 pl-5 rounded-xl py-3' type="email" placeholder='Email' />
                    <p className='text-red-600 text-sm font-semibold mt-2'>  {errors.emailError}</p>
                </div>
                <div className='mb-5'>
                    <input onChange={handlePasswordChange}  className='w-full outline-none border-2 pl-5 rounded-xl py-3' type="password" placeholder='Password' />
                    <p className='text-red-600 text-sm font-semibold mt-2'>  {errors.passwordError}</p>
                </div>
                <div className='mb-5'>
                    <input onChange={handleConfirmPassword}  className='w-full outline-none border-2 pl-5 rounded-xl py-3' type="password" placeholder='Confirm Password' />
                    <p className='text-red-600 text-sm font-semibold mt-2'>{errors.confirmPasserror}</p>
                </div>
                <div className='mb-4'>
                    {errorElement}
                    <button type='submit' className='button-29 w-full'>Register</button>
                </div>
                <div className='text-center'>
                    <p className='text-sm text-gray-900 font-semibold'> Have a account?<button onClick={()=>navigate('/login')} className='text-[#5468FF] font-bold'>Login</button></p>
                </div>
                

            </form>

        </div>
      
  </main>
    );
};

export default Register;