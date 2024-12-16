import React from "react";
import Navigation from "./componenten/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct imports
import Home from "./componenten/Pages/Home";
import logo from "./componenten/Img/osama.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projecten from "./componenten/Pages/Projecten";
import PackageBg from "./componenten/PackageBg";

const App = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Teko:wght@300..700&family=VT323&display=swap');
          </style>
        </head>
        <div className="app-container orbitron">
          {/* Uncomment if you need the background */}
          <PackageBg />
          <BrowserRouter>
            <Navigation />
            <div className="content-container d-flex flex-row">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projecten" element={<Projecten />} />
                {/* <Route path="/CV" element={<CV />} /> */}
              </Routes>
              <div className="col">
                <img
                  src={logo}
                  alt="Osama Logo"
                  className="logo-img"
                  loading="lazy"
                />
              </div>
            </div>
          </BrowserRouter>
        </div>
      </html>
    </>
  );
};

export default App;
