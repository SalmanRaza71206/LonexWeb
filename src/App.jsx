import {BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Services from "./Components/Pages/Services/Services";
import Contact from "./Components/Pages/Contact/Contact";
import Branches from "./Components/Pages/Branches/Branches";
import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Signup/Signup";
import Protect from "./Components/Protected";


function App() {
  return (
    <div className="App">
   
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<Protect Component={About}/>} />
        <Route path="/branches" element={<Protect Component={Branches}/>} />
        <Route path="/services" element={<Protect Component={Services}/>} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<Signup/>} />
      </Routes>
    
    </div>
  );
}

export default App;