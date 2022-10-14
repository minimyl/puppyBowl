import React from "react";
import PuppyRow from "./PuppyRow";

const PuppyList = (props) => {
  const players = props.players;
  console.log(players)
  return (
    <div>
      {players.length ? (
        players.map((player) => {
          return(
          <PuppyRow key={`player-${player.id}`} player={player}/>)
        })
      ) : (
        <div>Loading Players.</div>
      )}
    </div>
  );
};

export default PuppyList;
