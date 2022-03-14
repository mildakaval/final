import React from 'react';
import "./App.scss";
import Sidebar from "./components/navbar-section/sidebar";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeGridPage from "./pages/recipe-grid-page/recipe-grid-page";
import store from "./store";
import Home from "./pages/home";
import { Countrys } from "./pages/countrys";
import Amerika from "./pages/countrys/amerika";
import Anglija from "./pages/countrys/anglija";
import Argentina from "./pages/countrys/argentina";
import Armenija from "./pages/countrys/armenija";
import Belgija from "./pages/countrys/belgija";
import Brazilija from "./pages/countrys/brazilija";
import Graikija from "./pages/countrys/graikija";
import Gruzija from "./pages/countrys/gruzija";
import Indija from "./pages/countrys/indija";
import Ispanija from "./pages/countrys/ispanija";
import Italija from "./pages/countrys/italija";
import Japonija from "./pages/countrys/japonija";
import Kinija from "./pages/countrys/kinija";
import Kolumbija from "./pages/countrys/kolumbija";
import KostaRika from "./pages/countrys/kosta-rika";
import Lenkija from "./pages/countrys/lenkija";
import Lietuva from "./pages/countrys/lietuva";
import Meksika from "./pages/countrys/meksika";
import Norvegija from "./pages/countrys/norvegija";
import Portugalija from "./pages/countrys/portugalija";
import Prancuzija from "./pages/countrys/prancuzija";
import Tailandas from "./pages/countrys/tailandas";
import Turkija from "./pages/countrys/turkija";
import Ukraina from "./pages/countrys/ukraina";
import Vengrija from "./pages/countrys/vengrija";
import { DrinksMenu } from "./pages/drinks-menu";
import KarstiejiGerimai from "./pages/karstieji-gerimai";
import SaltiejiGerimai from "./pages/saltieji-gerimai";
import Search from "./pages/search";
import Login from "./pages/login";
import Register from "./pages/register";
import Contacts from "./pages/contacts";
import Footer from './components/footer/footer';
import NotFoundPage from './pages/not-found-page';

function App() {
  return (
    <div className="App">
  <>
  <ReduxProvider store={store}>
  <Router>
   <Sidebar />  
   <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/countrys" element={<Countrys />} />
        <Route path="/recipeGridPage" element={<RecipeGridPage />} />
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
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
   </Router>
   </ReduxProvider>
   <Footer />
   </>
   </div>
  );
 
}


export default App;