import React from 'react';
import "./App.css";
import Sidebar from "./components/navbar-section/sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import {
  Countrys,
} from "./pages/countrys";
import { DrinksMenu } from "./pages/drinks-menu";
import Login from "./pages/login";
import Contacts from "./pages/contacts";
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <>
      <Router>
      <Sidebar />
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/countrys" element={<Countrys />} />
        <Route path="/drinksMenu" element={<DrinksMenu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts/" element={<Contacts />} />
      </Routes>
      <Home />
      <Countrys />
     </Router>
       <Footer />
    
    </>
    </div>
  );
}

export default App;


