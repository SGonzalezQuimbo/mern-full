import { Routes, Route, useLocation } from 'react-router-dom'

import RegisterView from './views/RegisterView';
import Card from './components/Card/Card'
import './App.css'

function App() {

  const location = useLocation();

  return (
    <div className='app'>
    <h1>NavBar</h1>
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='/login' element={<h1>Login</h1>}/>
      <Route path='/register' element={<RegisterView/>}/>
      <Route path='/tasks' element={<h1>Todas las tareas</h1>}/>
      <Route path='/add-task' element={<h1>Agregar tarea</h1>}/>
      <Route path='/detail-tasks/:id' element={<h1>Detalle de tareas</h1>}/>
      <Route path='/profile' element={<h1>Perfil y opciones de perfil</h1>}/>
    </Routes>
    </div>
  )
}

export default App
