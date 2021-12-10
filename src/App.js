import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

import Img from './components/img'
import Character from './components/Character';

const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const data = 'https://swapi.dev/api/people/';
  const [starWars, setStarWarsData] = useState({})
  // const characters =  props.characters;
 

  useEffect(() => {
    const getData = () => {
      axios.get(data)
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
      
      
      {/* <Img url={starWars.url} alt={starWars.title}/> */}
      <h1 className="Header">Characters</h1>
      <Character name={starWars[0].name}/>
      <Character name={starWars[1].name}/>
      <Character name={starWars[3].name}/>
      <Character name={starWars[4].name}/>
    </div>
  );
}

export default App;
