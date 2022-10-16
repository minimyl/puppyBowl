import React from "react";
import PuppyRow from "./PuppyRow";

const PuppyList = (props) => {
  const players = props.players;
  return (
    <div id="puppyList">
      {players.length ? (
        players.map((player) => {
          return(
          <PuppyRow key={`player-${player.id}`} getSinglePuppy={props.getSinglePuppy} player={player}/>) //New stuff in hear from nic
        })
      ) : (
        <div>Loading Players.</div>
      )}
    </div>
  );
};

export default PuppyList;
