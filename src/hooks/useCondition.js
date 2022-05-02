import { useEffect, useState } from "react"

const useConditon=(truefalse)=>{
    const [isActive,setIsActive]=useState(true)
    useEffect(()=>{
         setIsActive(truefalse)
    },[])
    console.log(isActive)

    return [isActive,setIsActive]
}

export default useConditon