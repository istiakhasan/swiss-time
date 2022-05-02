import axios from "axios";
import { toast } from "react-toastify";
import useProducts from "./useProducts";

const useDelete=()=>{
    const [products,setProducts]=useProducts()
    const handleDelteItem=(id)=>{
        const  confirm=window.confirm("Are you sure to delete this item?")
        if(confirm){
            const url=`http://localhost:4000/inventory/${id}`;
            axios.delete(url)
            .then(res=>{
             const data=res.data
                if(data.deletedCount>0){
                    const rest=products.filter(product=>product._id !==id)
                    setProducts(rest)
                
                    toast.warning("Deleted Successfully")
                }
                
            })
        }
    
    }

    return [handleDelteItem,products,setProducts]
}

export default useDelete