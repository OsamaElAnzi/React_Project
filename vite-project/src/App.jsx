import React from "react";
import Navigation from "./componenten/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componenten/Pages/Home";
import logo from "./componenten/Img/osama.png";
import CVComponent from "./componenten/CV/CVComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projecten from "./componenten/Pages/Projecten";
import PackageBg from "./componenten/PackageBg";

const App = () => {
  return (
    <div className="app-container orbitron">
      <PackageBg />
      <BrowserRouter>
        <Navigation />
        <div className="content-container d-flex flex-row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projecten" element={<Projecten />} />
            <Route path="/CV" element={<CVComponent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <div className="col">
            <img
              width={400}
              height={400}
              src={logo}
              alt="Osama Logo"
              className="logo-img "
              loading="lazy"
            />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

const NotFound = () => {
  return <h1>404 - Page Not Found</h1>;
};

export default App;