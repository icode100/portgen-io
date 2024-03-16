import React from 'react';
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
  Routes
  
} from "react-router-dom";



function App() {
  let data = [
    {
      title:"Software eng",
      images:[pic1, pic2, pic3],
      urls : ["http://localhost:5173/softWareEng/port1", "http://localhost:5173/softWareEng/port2", "http://localhost:5173/softWareEng/port3"]
    },
    {
      title:"Fasion designer",
      images:[pic1, pic2, pic3],
      urls : ["http://localhost:5173/softWareEng/port1", "http://localhost:5173/softWareEng/port2", "http://localhost:5173/softWareEng/port3"]
    },
    {
      title:"Fasion designer",
      images:[pic1, pic2, pic3],
      urls : ["http://localhost:5173/softWareEng/port1", "http://localhost:5173/softWareEng/port2", "http://localhost:5173/softWareEng/port3"]
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
          {/* <Route path = '/softWareEng/port1' element = {<Webd1/>}/> */}
          {/* <Route path = '/softWareEng/port2' element = {<Webd2/>}/> */}
          {/* <Route path = '/softWareEng/port3' element = {<Webd3/>}/> */}
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
