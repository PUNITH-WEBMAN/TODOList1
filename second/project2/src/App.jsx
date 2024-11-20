import React from 'react'
import Login from './pages/Login'

import Register from './pages/Register'

import Navbar from './components/Navbar'
import { Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-zinc-900'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Navbar' element={<Navbar />} />
      </Routes>
    </div>
  )

  
}

export default App