import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./componenten/Navigation";
import Home from "./componenten/Pages/Home";
import Projecten from "./componenten/Pages/Projecten";
import CVComponent from "./componenten/CV/CVComponent";
import NotFound from "./componenten/Pages/NotFound";
import logo from "./componenten/Img/osama.png";
import PackageBg from "./componenten/PackageBg";
import LoadingOverlay from "./componenten/LoadingOverlay";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <div className="content-container d-flex flex-row">
        <div className="app-container orbitron">
          <PackageBg />
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
                className="logo-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;