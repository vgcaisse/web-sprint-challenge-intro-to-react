import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

import Character from './components/Character';

function App(){
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const STdata = 'https://swapi.dev/api/people/';
  const [starWars, setStarWarsData] = useState({}); 

  useEffect(() => {
    const getData = () => {
      axios.get(STdata)
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
      
      <h1 className="Header">Characters</h1>
      <Character char={starWars[0].name} />     
      <Character char={starWars[1].name} />
      <Character char={starWars[2].name} />
      <Character char={starWars[3].name} />
      <Character char={starWars[4].name} />
      <Character char={starWars[5].name} />      
    
    </div>
  );
}

export default App;
