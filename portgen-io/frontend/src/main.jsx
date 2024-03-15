import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import Test from './Test.jsx'
import Webd1 from './components/portfolios/Protfolio1.jsx';
import Webd2 from './components/portfolios/Protfolio2.jsx';
import Webd3 from './components/portfolios/Portfolio3.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <Webd2/> */}
    {/* <Webd3/> */}
    {/* <Webd1/> */}
    {/* <Test/> */}
  </React.StrictMode>,
)
