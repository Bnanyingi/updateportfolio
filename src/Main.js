import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './components/Home';
import About from './components/Aboutme/Aboutme';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import App from './App';





function Main () {
  return (
    <div className ="demo-big-content">
  <BrowserRouter>
      <div>
        <App />

      <Route exact path="/" component = {Homepage}/> 
      <Route path="/AboutMe" component = {About} /> 
      <Route path="/Contact" component = {Contact} /> 
      <Route path="/Projects" component = {Projects} /> 
      <Route path="/Resume" component = {Resume} /> 
      </div>


     </BrowserRouter>

     </div>

  );
    
};

export default Main;