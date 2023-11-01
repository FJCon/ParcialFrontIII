
import './App.css'
import { Card } from './Card.jsx'

function App() {

  return (
    <div className='App'>
      <h1>Crear un usuario</h1>
      <form action="">
        <input type="text" placeholder='Ingrese su usuario'/>
        <input type="text" placeholder='Ingrese su contraseña'/>
        <button>Enviar</button>
      </form>
      <Card />
    </div>
  )
}

export default App
