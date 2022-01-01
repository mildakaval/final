import React from 'react';
import "./App.css";
import Sidebar from "./components/navbar-section/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import {
  Countrys,
} from "./pages/Countrys";
import { DrinksMenu } from "./pages/DrinksMenu";
import Join from "./pages/Join";
import Contacts from "./pages/Contacts";
import {AppContext} from './components/context/Context';
import Footer from './components/footer/Footer';
function App() {
  return (
    <AppContext>
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/countrys" exact component={Countrys} />
        <Route path="/drinksMenu" exact component={DrinksMenu} />
        <Route path="/join" exact component={Join} />
        <Route path="/contacts" exact component={Contacts} />
      </Routes>
      <AboutUs />
      <Countrys />
      <Footer />
    </Router>
    </AppContext>
  );
}
  
export default App;



// paieska
// kontaktai