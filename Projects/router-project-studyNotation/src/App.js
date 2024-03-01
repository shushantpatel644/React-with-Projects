import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

// function App() {

//   const [isLoggedIn,setIsLoggedIn] = useState(false);

//   return (

//     <div>
//       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

//       <Routes>
//         {/* //create route  */}
//         <Route path="/" element = {<Home/>} />
//         <Route path="/login" element = {<Login/>} />
//         <Route path="/signup" element = {<Signup/>} />
//         <Route path="/dashboard" element = {<Dashboard/>} />

//       </Routes>
//     </div>
//   );
// }

// export default App;

// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar"
// import Home from "./pages/Home"
// import Login from "./pages/Login"
// import Signup from "./pages/Signup"
// import Dashboard from "./pages/Dashboard"
// import {useState } from 'react'
// import PrivateRoute from "./components/PrivateRoute";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/about" element= {<About isLoggedIn={isLoggedIn}/>} />

        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
       
        } />

      </Routes>

    </div>
    )
}

export default App;