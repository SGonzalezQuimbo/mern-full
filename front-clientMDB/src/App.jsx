import { Routes, Route, useLocation } from 'react-router-dom'

import RegisterView from './views/RegisterView';
import Card from './components/Card/Card'
import './App.css'
import LoginView from './views/LoginView';
import ListTasks from './views/ListTasks';
import ProtectedRoute from './ProtectedRoute';

function App() {

  const location = useLocation();

  return (
    <div className='app'>
      <h1>NavBar</h1>
      <Routes>
        <Route path='/' element={<h1>HomeView</h1>} />
        <Route path='/login' element={<LoginView />} />
        <Route path='/register' element={<RegisterView />} />
        <Route element={<ProtectedRoute/>}>
          <Route path='/tasks' element={<ListTasks />} />
          <Route path='/add-task' element={<h1>TaskFormView</h1>} />
          <Route path='/detail-tasks/:id' element={<h1>TaskFormView</h1>} />
          <Route path='/profile' element={<h1>ProfileView</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
