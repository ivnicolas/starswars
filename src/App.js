import React, { Component, useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [people,setPeople] = useState([])

  useEffect(()=>{
     async function fetchPeople(){
       let res = await fetch('https://swapi.dev/api/people/?format=json');
       let data = res.json(); 
       setPeople(data.results)
     }
  }, [])
  return (
    <div className = "App">
      <h1>Hello World</h1>
    </div> 
  );
};

export default App;


