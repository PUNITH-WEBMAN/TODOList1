// //link css
// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Home from './pages/Home'
// import About from './pages/About'
// // import Contact from '/pages/Contact'
// // import Feature from './pages/Feature'
// import Navbar from './components/Navbar'
// import Login from './pages/Login' 
// import Register from './pages/Register'

// export default function App() {
//   return (
//     <div className='bg-zinc-900'>

//       <Navbar />

//       <Routes>
//       <Route path='/register' element={<Register/>}/>
//       <Route path='/Login' element={<Login />} />
//         <Route path='/home' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         {/* <Route path='/Feature' element={<Feature />} /> */}
//         {/* <Route path='/trip' element={<Trip/>} /> */}
    
//       </Routes>


//     </div>
//   )
// }

// // import React from 'react'

// // const App = () => {
// //   return (
// //     <><div className='bx1'>

// //     </div><div className='bx2'>

// //       </div></>
// //   )
// // }

// // export default App




import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact' // Uncommented to include Contact page
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <div className='bg-zinc-900'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}
