import Topbar from "./Components/tab/Topbar";
import Into from "./Components/intro/Into";
import Contacts from "./Components/Contact/Contacts";
import Portfolio from "./Components/port/Portfolio";
import  Testtimo from "./Components/tubeu/Testtimo";
import Works from "./Components/work/Works";

import { useState } from "react";

import "./app.scss"
import Menu from "./Components/m/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
        <Into/>
        <Portfolio/>
        <Works/>
        <Testtimo/>
        <Contacts/>
      </div>
    </div>
  );
}
export default App;
