import React from "react";


const PuppyRow = (props) => {
  const player = props.player;
  console.log(player);
  return (
    <div id="puppyContestant">
      <div id="puppyName">
        {player.name}
      </div>
      <div id="puppyId">
        {player.id}
      </div>
      <img src={player.imageUrl} className="puppyImage" />
      <button
        onClick={(e) => {
          e.preventDefault();
          props.getSinglePuppy(player.id); //This gets up the puppy details that we wanted without Router
          PuppyProfile()
        }}
      >
        See Details
        
      </button>
    </div>
  );
};

export default PuppyRow;
