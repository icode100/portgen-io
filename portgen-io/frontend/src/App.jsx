import React, { useEffect, useState, createContext } from 'react';
import SettingPage from './components/SettingPage.jsx';
import HomePage from './components/HomePage.jsx';
import MainPage from './components/MainPage.jsx';
import pic1 from "./assets/port1.jpg";
import pic2 from "./assets/port2.jpg";
import pic3 from "./assets/port3.jpg";
import RegisterLogin from './components/RegisterLogin.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import InfoPage from './components/InfoPage.jsx'
import axios from 'axios'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet

} from "react-router-dom";
import Cookies from 'js-cookie'
import Portfolio1 from './components/portfolios/Protfolio1.jsx';
import Portfolio2 from './components/portfolios/Protfolio2.jsx';
import Portfolio3 from './components/portfolios/Portfolio3.jsx';



function Portfolio_base(){
  return(
    <Outlet/>
  )
}

function App() {

  let data = [
    {
      title: "Software eng",
      images: [pic1, pic2, pic3],
      urls: ["http://localhost:5173/portfolio/port1", "http://localhost:5173/portfolio/port2", "http://localhost:5173/portfolio/port3"]
    },
    {
      title: "Fasion designer",
      images: [pic1, pic2, pic3],
      urls: ["http://localhost:5173/portfolio/port1", "http://localhost:5173/portfolio/port2", "http://localhost:5173/portfolio/port3"]
    },
    {
      title: "Fasion designer",
      images: [pic1, pic2, pic3],
      urls: ["http://localhost:5173/portfolio/port1", "http://localhost:5173/portfolio/port2", "http://localhost:5173/portfolio/port3"]
    }
  ]
  const isvalidated = Cookies.get('token') === undefined;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/reglog' element={<RegisterLogin />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
          <Route path='/main' element={isvalidated ? <Navigate to="/" /> : <MainPage data={data} />} />
          <Route path='/info' element={isvalidated ? <Navigate to="/" /> : <InfoPage />} />
          <Route path='/settings' element={isvalidated ? <Navigate to="/" /> : <SettingPage />} />
          <Route path='/logout' element={<HomePage />} />
          <Route path='/portfolio' element={<Portfolio_base/>}>
            <Route path='port2' element={<Portfolio2 />} />
            <Route path='port3' element={<Portfolio3 />} />
            <Route path='port1' element={<Portfolio1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
