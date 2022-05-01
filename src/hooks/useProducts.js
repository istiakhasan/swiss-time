import axios from "axios"
import { useEffect, useState } from "react"

const useProducts=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
    axios.get('http://localhost:4000/inventory')
    .then(res=>{
        setProducts(res.data)
    })

    },[])
    return [products,setProducts]
}

export default useProducts