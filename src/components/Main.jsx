import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import PuppyList from "./PuppyList";
import PuppyRow from "./PuppyRow";
import Footer from "./Footer";

const Main = () => {
  const [players, setPlayers] = useState([]);
  const [singleDog, setSingleDog] = useState({}); //New Stuff from nic
  const [searchResult, setSearchResults] = useState([]);


  
  const getPuppy = async () => {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-PT/players"
    );
    const puppies = await response.json();
    setPlayers(puppies.data.players);
  };
  const getSinglePuppy = async (playerId) => {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-PT/players/${playerId}`
    );
    const result = await response.json();
    const puppy = result.data.player;
    setSingleDog(puppy);
  }; //New Stuff from Nic

  const puppyResult = (data) => {
    setSearchResults(data) 
  }
  

  useEffect(() => {
    getPuppy();
  }, []);

  
  return (
    <div id="main">
      <Navbar players={players} result={puppyResult}/>
      
      {singleDog.id ? (
        <PuppyRow player={singleDog} class="selectedPuppy" />
      ) : (
        //new Stuff from Nic
        <PuppyList getSinglePuppy={getSinglePuppy} players={searchResult.length > 0 ? searchResult: players}/>
      )}
      <Footer />
    </div>
  );
};

export default Main;
