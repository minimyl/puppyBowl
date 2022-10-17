import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import PuppyList from "./PuppyList";
import PuppyRow from "./PuppyRow";
import Footer from "./Footer";

const Main = () => {
  const [players, setPlayers] = useState([]);
  const [singleDog, setSingleDog] = useState({}); //New Stuff from nic


  
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

  useEffect(() => {
    getPuppy();
  }, []);

  return (
    <div id="main">
      <Navbar />
      {singleDog.id ? (
        <PuppyRow player={singleDog} class="selectedPuppy" />
      ) : (
        //new Stuff from Nic
        <PuppyList getSinglePuppy={getSinglePuppy} players={players} />
      )}
      <Footer />
    </div>
  );
};

export default Main;
