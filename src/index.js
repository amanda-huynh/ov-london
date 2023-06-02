import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  MapOverviewInformational
} from "./components";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar tabindex="1"/>
    <Routes>
      <Route tabindex="2" path="/mapoverviewinformational" element={<MapOverviewInformational />} />
    </Routes>
    <div id="photoOverview" tabindex="3">
      <img src={process.env.PUBLIC_URL + '/gems-issues/ZS_Photo1.jpeg'} tabindex="4" alt="ZS_Photo1" width="300px" height="300px" className="photo" />
      <img src={process.env.PUBLIC_URL + '/gems-issues/ZS_Photo2.jpeg'} tabindex="5" alt="ZS_Photo2" width="300px" height="300px" className="photo" />
      <img src={process.env.PUBLIC_URL + '/gems-issues/ZS_Photo3.jpeg'} tabindex="6" alt="ZS_Photo3" width="300px" height="300px" className="photo" />
      <img src={process.env.PUBLIC_URL + '/gems-issues/ZS_Photo4.jpeg'} tabindex="7" alt="ZS_Photo4" width="300px" height="300px" className="photo" />
      <img src={process.env.PUBLIC_URL + '/gems-issues/ZS_Photo5.jpeg'} tabindex="8" alt="ZS_Photo5" width="300px" height="300px" className="photo" />
    </div>
  </Router>
);