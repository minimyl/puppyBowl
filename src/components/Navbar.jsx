import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2>Puppy Bowl</h2>
      <form>
        <fieldset>
            <label>
                <p>Name:</p>
                <input name="name"/>                
            </label>
            <label>
                <p>Breed:</p>
                <input name="name"/>                
            </label>
        </fieldset>
        <button type="submit">Submit here:</button>
        
      </form>
    </div>
  );
};

export default Navbar;
