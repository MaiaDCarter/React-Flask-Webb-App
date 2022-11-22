import logo from './logo.svg';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import './index.css'
//Homepage Component
function Home() {
    let navigate = useNavigate(); 
    const quizPage = () =>{ 
      let path = `/Quiz`; 
      navigate(path);
    }

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        Welcome to my quiz!
      </h1>
      <Link to="/Quiz" className="stylebutton">START QUIZ</Link>
    </header>
  </div>
  );
}

export default Home;