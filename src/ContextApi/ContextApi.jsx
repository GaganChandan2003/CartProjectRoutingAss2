import { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContextApi=createContext();

export const ContextProvider =({children})=>
{
    const [product, setproduct] = useState({});
    const navigate=useNavigate();
    
    const handleonclick=(el)=>
    {
      setproduct(el);
      navigate('/details')
    }
    return <ContextApi.Provider value={{product,handleonclick}}>{children}</ContextApi.Provider>
}