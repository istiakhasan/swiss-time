import React, { useEffect } from 'react';
import google from '../../../../images/icon/google.png'
import gitimg from '../../../../images/icon/github.png'
import {useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import useToken from '../../../../hooks/useToken';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [googleUser]=useAuthState(auth);
    const location=useLocation();
    const from=location?.state?.from?.pathname || '/'
    const navigate=useNavigate();
    const [token]=useToken(user)
    useEffect(()=>{
        if(token){
            navigate(from,{replace:true})
        }
    },[user])
   
      //loading component 
  let lodingElement;
  if(loading){
      lodingElement= <div className='  w-full flex justify-center items-center'>
      <Loading />
     </div>
  }
 let errorElement;
  if(error){
    errorElement=<p className='text-red-900 text-sm text-center font-semibold'>{error.message}</p>
  }
    return (
        <>
           {
               loading && lodingElement
           }
            {errorElement}
            <button onClick={()=>signInWithGoogle()} className='shadow-gray-900 shadow-md text-[#5468FF] w-full hover:text-white hover:bg-[#5468FF] font-bold rounded-lg my-4 py-2 flex items-center justify-center'><img className='mr-2' src={google} alt="" /> Google Sign In</button>
            {/* <button className='shadow-gray-900 shadow-md text-[#5468FF] w-full hover:text-white hover:bg-[#23282C] font-bold rounded-lg my-4 py-2 flex items-center justify-center'><img className='mr-2 bg-white' src={gitimg} alt="" /> Git Sign In</button> */}
                 
        </>
    );
};

export default Social;