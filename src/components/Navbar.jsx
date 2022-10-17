import React, {useState} from "react";


const Navbar = () => {
  return (
    <div id="navbar">
      <h2>The Greatest Puppy Bowl</h2>
      <form>
        <div id="submitBox">
          <div id="searchForm">
            <label>
              <p>Name:</p>
              <input name="name" />
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
