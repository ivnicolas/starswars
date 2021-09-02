import React, { Component, useState, useEffect } from 'react';
import People from './components/People'
import './App.css';

const App = () => {

  const [people,setPeople] = useState([])


  useEffect(()=>{
     async function fetchPeople(){
       let res = await fetch('https://swapi.dev/api/people/?format=json');
       let data = await res.json(); 
       setPeople(data.results)
     }

     fetchPeople()
  }, [])

  return (
    <div className = "App">
       <h1>Hello World</h1>
      {people.map( (person,i) =>
        <People key={i} info={person}/>
        )}

    </div> 
  );
};

export default App;


