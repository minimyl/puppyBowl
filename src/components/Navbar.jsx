import React, {useState} from "react";

const Navbar = (props) => {
  
function searched(player) {
  const players = props.players
  props.result(players.filter((item) => item.name === player.target.value))
  return players.filter((player) => players.name === player)
}

  return (
    <div id="navbar">
      <h2>The Greatest Puppy Bowl</h2>
      <form>
        <div id="submitBox">
          <div id="searchForm">
            <label>
              <p>Name:</p>
              <input name="name" onChange={searched}/>
            </label>
            <label>
              <p>Breed:</p>
              <input name="name" />
            </label>
          </div>
        </div>
        <button type="submit" id="searchButton">Submit here:</button>
      </form>
    </div>
  );
};

export default Navbar;
