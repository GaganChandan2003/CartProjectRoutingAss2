import React from 'react'
import { Link } from 'react-router-dom'
import st from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <div className={st.nav}>
        <div><Link to='/'><img src="https://www.designbust.com/download/1408/png/apple_company_logo_png512.png" alt="Apple" /></Link></div>
        <div className={st.links}>
            <Link style={{ textDecoration: 'none' }} to='/clothing' ><h3>Clothing</h3></Link>
            <Link style={{ textDecoration: 'none' }} to='/painting'><h3>Painting</h3></Link>
            <Link style={{ textDecoration: 'none' }} to='/electronic'><h3>Electronics</h3></Link>
        </div>
    </div>
    <div><img src="https://i.ytimg.com/vi/aMx1kStx6QQ/maxresdefault.jpg"  width='100% 'alt="" /></div>
    </div>
    
  )
}

export default Navbar

{/* <a class="ar-link ios-14" rel="ar" href="" data-analytics-title="see apple event in ar" data-analytics-click="prop3:see apple event in ar" id="arql-link"><img></a> */}