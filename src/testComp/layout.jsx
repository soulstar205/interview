import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home'
import NewRegister from './newRegister'

class Layout extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <Router>
                 <Route path="/" exact render={(props)=> <Home {...props} />}/>
                 <Route path="/newRegister" exact render={(props)=> <NewRegister {...props} />}/>
            </Router>
            
        )
    }
}
export default Layout