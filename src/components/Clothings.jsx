import React, { useContext, useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./common.css"
import { ContextApi } from '../ContextApi/ContextApi'

const Clothings = () => {

const [clothing, setclothing] = useState([]);
const {handleonclick}=useContext(ContextApi);

  useEffect(()=>
  {
     axios.get("http://localhost:2022/clothing")
     .then((r)=>setclothing(r.data));
  },[])
  return (

    <div>
     
      <div className="outer">
        {
          clothing.map((el)=>
          (
            <div key={el.id} onClick={()=>handleonclick(el)}>
              <img src={el.image} alt="" srcset="" />
              <h3>{el.title}</h3>
            </div>

          ))
        }
      </div>
 
      
     
    </div>

  )
}

export default Clothings