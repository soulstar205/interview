import React, { useState, useContext } from 'react'
import {Context} from './store'
import LoginForm from './components/loginForm'
import DashBoard from './components/newDashBoard'



const Layout = ()=>{

      const {user} = useContext(Context)
  
    
    return(
        <div>
            {
                !user?
                <LoginForm/>
                :
                <DashBoard/>
            }
            
        </div>
    )
}
export default Layout