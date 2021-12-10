import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

import Img from './components/img'
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const baseURL = 'https://swapi.dev/api/people/';
  const [starWars, setStarWarsData] = useState({})
 

  useEffect(() => {
    const getData = () => {
      axios.get(baseURL)
      .then(res => {
        console.log(res.data)
        setStarWarsData(res.data)        
      })
      .catch(err => {
        console.error()
      })
    }
    getData();
  }, []);

  return (
    <div className="App">
      {/* <Character /> */}
      <Img url={starWars.url} alt={starWars.title}/>
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
