import React from 'react';
import SettingPage from './components/SettingPage.jsx';
import HomePage from './components/HomePage.jsx';
import MainPage from './components/MainPage.jsx';
import pic1 from "./assets/portfilo1.png";
import pic2 from "./assets/potfolio2.png";
import pic3 from "./assets/portfolio3.png";
import RegisterLogin from './components/RegisterLogin.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import InfoPage from './components/InfoPage.jsx'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
  
} from "react-router-dom";

function App() {
  let data = [
    {
      title:"Software eng",
      images:[pic1, pic2, pic3]
    },
    {
      title:"Fasion designer",
      images:[pic1, pic2, pic3]
    },
    {
      title:"Fasion designer",
      images:[pic1, pic2, pic3]
    }
  ]
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/reglog' element={<RegisterLogin/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
          </Route>
          <Route path='/main' element={<MainPage data={data}/>} />
          <Route path='/info' element={<InfoPage/>} />
          <Route path='/settings' element={<SettingPage/>} />
          <Route path='/logout' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
