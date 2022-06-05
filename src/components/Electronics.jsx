import React, { useEffect,useState,useContext } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
import { ContextApi } from '../ContextApi/ContextApi'
import "./common.css"

const Electronics = () => {
  const [electronics, setelectronics] = useState([]);
  const {handleonclick}=useContext(ContextApi)


  useEffect(()=>
  {
     axios.get("http://localhost:2022/electronics")
     .then((r)=>setelectronics(r.data));
  },[])
  return (
    <div>
      <div className="outer">
        {
          electronics.map((el)=>
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


export default Electronics