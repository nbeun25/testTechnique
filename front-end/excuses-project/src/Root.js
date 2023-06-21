import './App.css';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Lost from "./components/Lost"; 

import { BrowserRouter as Router, Route as Switch, Link, Routes } from "react-router-dom";
import React from "react";

function Root() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/NotFound'>Not Found</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Switch exact path='/' element={<Home/>}/>
            <Switch path='/lost' element={<Lost/>}/>
            <Switch path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Root;
