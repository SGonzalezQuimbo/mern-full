import { Routes, Route, useLocation } from 'react-router-dom'

import RegisterView from './views/RegisterView';
import './App.css'
import LoginView from './views/LoginView';
import ListTasks from './views/ListTasks';
import ProtectedRoute from './ProtectedRoute';
import NavBar from './components/NavBar';
import TaskFormView from './views/TaskFormView';

function App() {

  const location = useLocation();

  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>HomeView</h1>} />
        <Route path='/login' element={<LoginView />} />
        <Route path='/register' element={<RegisterView />} />
        <Route element={<ProtectedRoute/>}>
          <Route path='/tasks' element={<ListTasks />} />
          <Route path='/add-task' element={<TaskFormView/>} />
          <Route path='/detail-tasks/:id' element={<h1>TaskFormViewParaEditarrr</h1>} />
          <Route path='/profile' element={<h1>ProfileView</h1>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
