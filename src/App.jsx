import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AboutUs from './Pages/AboutUs'

const App = () => {
  return (
    <>
      <BrowserRouter>
    <Navbar />
    <Routes>

      <Route>
        <Route index element={<Home/>}></Route>
         <Route path='/about' element={<AboutUs/>}></Route>
         {/*
        <Route path='/contact' element={}></Route>
        <Route path='/cart' element={}></Route>
        <Route path='/account' element={}></Route>
        <Route path='/propage' element={}></Route> */}
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
