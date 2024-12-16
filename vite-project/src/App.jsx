import React from "react";
import Navigation from "./componenten/Navigation";
import Home from "./componenten/Pages/Home";
import logo from "./componenten/Img/osama.png";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projecten from "./componenten/Pages/Projecten";
import PackageBg from "./componenten/PackageBg";

const App = () => {
    return (
        <div className="app-container">
            <PackageBg />
            <Navigation />
            <div className="content-container d-flex flex-row">
                <Projecten />
                <div className="col ">
                    <img src={logo} alt="Osama Logo" className="logo-img" />
                </div>
            </div>
        </div>
    );
};

export default App;
