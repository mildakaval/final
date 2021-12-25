import "./App.css";
import Sidebar from "./components/navbar-section/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import {
  Countrys,
} from "./pages/Countrys";
import { DrinksMenu } from "./pages/DrinksMenu";
import Health from "./pages/Health";
import Join from "./pages/Join";
import Contacts from "./pages/Contacts";
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/countrys" exact component={Countrys} />
        <Route path="/drinksMenu" exact component={DrinksMenu} />
        <Route path="/health" exact component={Health} />
        <Route path="/join" exact component={Join} />
        <Route path="/contacts" exact component={Contacts} />
      </Routes>
    </Router>
  );
}
  
export default App;



// paieska
// kontaktai