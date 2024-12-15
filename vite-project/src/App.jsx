import React from "react";
import Navigation from "./componenten/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./componenten/Pages/Home";
import logo from "./componenten/Img/osama.png";
function App() {
  return (
    <div>
      <Navigation />
      <div className="d-flex flex-row">
        <Home />
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default App;
