import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Navigationbar';
import { Route,Routes } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import loadericon from './assets/loader.gif'
const Loginpage=lazy(()=>import('./component/loginpage'))
const Homepage=lazy(()=>import('./component/homepage'))
const Navigationbar=lazy(()=>import('./component/Navigationbar'))
const Registrationpage=lazy(()=>import('./component/registration'))
const FetchApi=lazy(()=>import('./component/products'))
const Aboutcom=lazy(()=>import('./component/about'))

function App() {
  

  return (
    <>
    <Navigationbar/>
    <Suspense fallback={<img src={loadericon}/>}/>
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
