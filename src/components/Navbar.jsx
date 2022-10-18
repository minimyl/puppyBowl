import React, {useState} from "react";
// const input = document.querySelector('input');
// const result = getPuppy()
// input.addEventListener('change', updateValue);

// function updateValue(e) {
//   log.textContent=e.target.value
// }

const Navbar = (props) => {
  const [searchPuppy, setSearchPuppy] = useState([])
function Searched (player) {
  return player.filter((players) =>{
    if(player.name == players){
      return searchPuppy.some((newPlayer) => {
        return (
          player[newPlayer]
                  .toString()
                  .toLowerCase()
                  .indexOf(q.toLowerCase()) > -1
        )
      })  
    }else if (players == []) {
      return searchPuppy.some((newPuppy) => {
        return (
          player[newPlayer]
                  .toString()
                  .toLowerCase()
                  ,indexof(q.toLowerCase()) > -1
        )
      })
    }
  })
}


  return (
    <div id="navbar">
      <h2>The Greatest Puppy Bowl</h2>
      <form>
        <div id="submitBox">
          <div id="searchForm">
            <label>
              <p>Name:</p>
              <input name="name" onChange={Searched}/>
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
