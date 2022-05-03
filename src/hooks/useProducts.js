import axios from "axios"
import { useEffect, useState } from "react"

const useProducts=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
    axios.get('https://lit-depths-84419.herokuapp.com/inventory')
    .then(res=>{
        setProducts(res.data)
    })

    },[])
    return [products,setProducts]
}

export default useProducts