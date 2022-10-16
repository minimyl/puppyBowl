import React from "react";

const PuppyRow = (props) => {
  const player = props.player;
  return (
    <div id="puppyContestant">
      {player.name}
      {player.id}
      <button
        onClick={(e) => {
          e.preventDefault();
          props.getSinglePuppy(player.id); //This gets up the puppy details that we wanted without Router
        }}
      >
        See Details
      </button>
    </div>
  );
};

export default PuppyRow;
