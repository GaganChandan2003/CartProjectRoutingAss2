import React, { useEffect,useState,useContext } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
import { ContextApi } from '../ContextApi/ContextApi'
import "./common.css"

const Paintings = () => {
  const [paintings, setpaintings] = useState([]);
  const {handleonclick}=useContext(ContextApi);

  useEffect(()=>
  {
     axios.get("http://localhost:2022/paintings")
     .then((r)=>setpaintings(r.data));
  },[])
  return (
    <div>
      <div className="outer">
        {
          paintings.map((el)=>
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

export default Paintings