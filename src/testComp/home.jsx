import React from 'react'
import Header from './header'
import {Link} from 'react-router-dom'
import '../App.css'

const Home =()=>{

        return(
            <div>
                <Header/>
                <h1>Welcome to Skyware Technologies</h1>
               <Link to={'/newRegister'}><p>Click here to register</p></Link>
            </div>
        )
 
}
export default Home