import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Navigationbar';
import { Route,Routes } from 'react-router-dom';
import Loginpage from './component/loginpage';
import Homepage from './component/homepage';
import Navigationbar from './component/Navigationbar';
import Registrationpage from './component/registration';
import FetchApi from './component/products';
import Aboutcom from './component/about';

function App() {
  

  return (
    <>
    <Navigationbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/reg' element={<Registrationpage/>}/>
      <Route path='/log' element={<Loginpage/>}/>
      <Route path='/stock' element={<FetchApi/>}/>
      <Route path='/about' element={<Aboutcom/>}/>
    </Routes>
    </>
  )
}

export default App
