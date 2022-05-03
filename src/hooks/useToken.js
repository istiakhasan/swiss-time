import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        axios.post(`https://lit-depths-84419.herokuapp.com/login`,{email})
        .then(res=>{
            const data=res.data 
            setToken(data.accessToken)
            localStorage.setItem('accessToken',data.accessToken)
        })
    }, [user]);
    return [token];
}

export default useToken;