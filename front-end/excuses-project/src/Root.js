import "./App.css";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Lost from "./views/Lost";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import UniqueExcuse from "./views/UniqueExcuse";

function Root() {
  // Définition de toutes les routes
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="lost" element={<Lost />} />
          <Route path="/api/:http_code" element={<UniqueExcuse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Root;
