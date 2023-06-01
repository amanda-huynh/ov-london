import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  MapOverviewInformational
} from "./components";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/mapoverviewinformational" element={<MapOverviewInformational />} />
    </Routes>
  </Router>
);