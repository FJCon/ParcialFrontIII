
import { useState } from 'react'
import './App.css'
import { Card } from './Card.jsx'
import {Error} from './Error.jsx'

const [user, setUser] = useState('')
const [password, setPassword] = useState('')
const [card , setCard] = useState('')

const getUser = (e)=>{
  setUser(e.target.value)
  console.log(user)
}

const getPassword = (e)=>{
  setPassword(e.target.value)
  console.log(password)
}

const validarUser = (usr)=>{
  if((usr.length<3) && (usr[0] == ' ')){
    return false
  }else{
    return true
  }
}

const validarPass = (pass)=>{
  if(pass.length<6){
    return false
  }else{
    return true
  }
}

const onSubmitForm = (e)=>{
  e.preventDefault()
  console.log(user + ' '+password)
  if(validarUser(user) && validarPass(password)){
    setCard(<Card usuario={user} contrasenia={password}/>)
  }else{
    setCard(<Error />)
  }

}



function App() {

  return (
    <div className='App'>
      <h1>Crear un usuario</h1>
      <form action="" onSubmit={onSubmitForm}>
        <input type="text" placeholder='Ingrese su usuario' value={user} onChange={getUser}/>
        <input type="text" placeholder='Ingrese su contraseña' value={password} onChange={getPassword}/>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default App
