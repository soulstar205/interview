import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const Header=()=>{
    return(
        <div className="header">
            <Link to={'/'}><div className="home">Home</div></Link>
            <Link to={'/register'}><div className="register">register</div></Link>
        </div>
    )
}
export default Header