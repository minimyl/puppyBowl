import React, {useState, useEffect} from "react";
import {Navbar} from "./";
import PuppyList from "./PuppyList"

const Main = () => {
  const [players, setPlayers] = useState([]);


  const getPuppy = async () => {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-PT/players');
    const puppies = await response.json();
    setPlayers(puppies.data.players);
  }

  useEffect(() => {
    getPuppy()
  }, [])
    
  
  return (
    <div id="main">
    <Navbar />
    <PuppyList players={players}/>
  </div>
  );
};

export default Main;
