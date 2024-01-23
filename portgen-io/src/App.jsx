import React from 'react';
import SettingPage from './components/SettingPage.jsx';
import HomePage from './components/HomePage.jsx';
import MainPage from './components/MainPage.jsx';
import pic1 from "./assets/portfilo1.png";
import pic2 from "./assets/potfolio2.png";
import pic3 from "./assets/portfolio3.png";


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
     <HomePage/>
     {/* <SettingPage/> */}
     {/* <MainPage data={data}/> */}
    </>
  )
}

export default App
