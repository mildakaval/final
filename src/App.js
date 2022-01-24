import React from 'react';
import "./App.scss";
import Sidebar from "./components/navbar-section/sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Countrys } from "./pages/countrys";
import Amerika from "./pages/amerika";
import Anglija from "./pages/anglija";
import Argentina from "./pages/argentina";
import Armenija from "./pages/armenija";
import Belgija from "./pages/belgija";
import Brazilija from "./pages/brazilija";
import Graikija from "./pages/graikija";
import Gruzija from "./pages/gruzija";
import Indija from "./pages/indija";
import Ispanija from "./pages/ispanija";
import Italija from "./pages/italija";
import Japonija from "./pages/japonija";
import Kinija from "./pages/kinija";
import Kolumbija from "./pages/kolumbija";
import KostaRika from "./pages/kosta-rika";
import Lenkija from "./pages/lenkija";
import Lietuva from "./pages/lietuva";
import Meksika from "./pages/meksika";
import Norvegija from "./pages/norvegija";
import Portugalija from "./pages/portugalija";
import Prancuzija from "./pages/prancuzija";
import Tailandas from "./pages/tailandas";
import Turkija from "./pages/turkija";
import Ukraina from "./pages/ukraina";
import Vengrija from "./pages/vengrija";
import { DrinksMenu } from "./pages/drinks-menu";
import KarstiejiGerimai from "./pages/karstieji-gerimai";
import SaltiejiGerimai from "./pages/saltieji-gerimai";
import Search from "./pages/search";
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
        <Route path="/countrys/amerika/" element={<Amerika />} />
        <Route path="/countrys/anglija/" element={<Anglija />} />
        <Route path="/countrys/argentina/" element={<Argentina />} />
        <Route path="/countrys/armenija/" element={<Armenija />} />
        <Route path="/countrys/belgija/" element={<Belgija />} />
        <Route path="/countrys/brazilija/" element={<Brazilija />} />
        <Route path="/countrys/graikija/" element={<Graikija />} />
        <Route path="/countrys/gruzija/" element={<Gruzija />} />
        <Route path="/countrys/indija/" element={<Indija />} />
        <Route path="/countrys/ispanija/" element={<Ispanija />} />
        <Route path="/countrys/italija/" element={<Italija />} />
        <Route path="/countrys/japonija/" element={<Japonija />} />
        <Route path="/countrys/kinija/" element={<Kinija />} />
        <Route path="/countrys/kolumbija/" element={<Kolumbija />} />
        <Route path="/countrys/kostaRika/" element={<KostaRika />} />
        <Route path="/countrys/lenkija/" element={<Lenkija />} />
        <Route path="/countrys/lietuva/" element={<Lietuva />} />
        <Route path="/countrys/meksika/" element={<Meksika />} />
        <Route path="/countrys/norvegija/" element={<Norvegija />} />
        <Route path="/countrys/portugalija/" element={<Portugalija />} />
        <Route path="/countrys/prancuzija/" element={<Prancuzija />} />
        <Route path="/countrys/tailandas/" element={<Tailandas />} />
        <Route path="/countrys/turkija/" element={<Turkija />} />
        <Route path="/countrys/ukraina/" element={<Ukraina />} />
        <Route path="/countrys/vengrija/" element={<Vengrija />} />
        <Route path="/drinksMenu" element={<DrinksMenu />} />
        <Route path="/drinksMenu/karstiejiGerimai" element={<KarstiejiGerimai />} />
        <Route path="/drinksMenu/saltiejiGerimai" element={<SaltiejiGerimai />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
   </Router>
   <Footer />
   </>
   </div>
  );
}


export default App;


