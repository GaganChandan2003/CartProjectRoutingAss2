import React from 'react'
import { useContext } from 'react'
import { ContextApi } from '../ContextApi/ContextApi'
import "./common.css"
const Details = () => {
    const {product}=useContext(ContextApi)
  return (
    <div className='outer' >
        {
            <div>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <button>Add to Cart</button>
            </div>
        }
    </div>
  )
}

export default Details