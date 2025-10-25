// import './App.css'
import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import { NavBar } from './components/navbar/Navbar'
import { SecondComponent } from './components/SecondComponent';
import { Route, Routes,  } from 'react-router';
import { LoginForm } from './components/LogingForm';
import Login from './pages/Login';





function App() {

  
  
  return (
  <>
    <NavBar />
    <Login />
    <Routes>
      <Route path="/acceuil" element={<FirstComponent name={'test'} />} />
      <Route path="/second" element={<SecondComponent />} />
    </Routes>
  </>
  )
}

export default App
