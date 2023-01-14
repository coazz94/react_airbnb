import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navbar, Hero } from './airbnb';
import { Mapping } from './card';
// import { Testing, Mapping } from './images/testing';
import reportWebVitals from './reportWebVitals';
// import {people} from "./cardobjects.js"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Navbar/>
      <Hero />
      <Mapping/>
        {/* <Card info={people.person1}/>
        <Card info={people.person2}/>
        <Card info={people.person3}/> */}
      {/* <Testing/> */}
      {/* <Mapping/> */}
    </div>
  </React.StrictMode>
);


reportWebVitals();
