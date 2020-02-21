import React from 'react'
import io from 'socket.io-client'
export const Context = React.createContext()
const uuidv4 = require('uuid/v4');




const initState = {
    general:[],
    Romance:[],
    Computer:[],
    Movies:[],
    Scifi:[],
    Women:[],


}


function reducer(state, action){
    const {user, msg, iv, room} = action.payload
    switch(action.type){
        case "RECIEVE_MESSAGE":
        
            return{
                ...state,
                [room]: [
                    ...state[room],
                    {
                        user,
                        msg,
                        iv
                    }
             ]
            }
        default:
            return state

    }
}

let socket;
const users = []



function sendChatAction(value){
    socket.emit('chat message', value)
}
function addUser(user){
    socket.id = users.push(user) 
    console.log(user)
}


export default function Store(props){

    const [allChats, dispatch] = React.useReducer(reducer, initState)

    if(!socket){
        socket = io(':3001')
        socket.on('chat message', function(msg){
            dispatch({type: 'RECIEVE_MESSAGE', payload: msg})
        })

        socket.on("user_connected", function(user, addUser){
            if(user in users){
                io.emit(user + "taken")
            }else{
                addUser(user)
                io.emit('user_connected', user)
            }
            
        })
       
    }

    const Login = (user)=>{
        socket.io.emit("user_connected", user)
    }
    
    const user = socket.id
    
    return(
        <Context.Provider value={{allChats, sendChatAction, user, Login}}>
            {props.children}
        </Context.Provider>
    )
}