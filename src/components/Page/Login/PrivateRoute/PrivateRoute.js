import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.config';
import Loading from '../../../Shared/Loading/Loading';

const PrivateRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location=useLocation()
    if(loading){
        return (
            <div className=' h-[40vh] w-full flex justify-center items-center'>
                <Loading />
            </div>
        )
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace/>
    }
    return children;
};

export default PrivateRoute;