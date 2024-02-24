// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// //npm i axios here download 
// //npm i react-router-dom download
import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home/Home'
import NotFound from './NotFound'
import DoctorInfo from './Doctor/DoctorInfo'
import PatientsInfo from './Patient/PatientsInfo'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/doctor" element={<DoctorInfo/>}/>
          <Route path="/patient" element={<PatientsInfo/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
