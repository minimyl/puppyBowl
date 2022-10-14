import React, { useEffect } from "react";

function GetData() {
  useEffect(() => {
    fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-PT/players")
    .then(response => response.json())
    .then(json => console.log(json))

  }, []);
  return(
  <div>
    PuppyList 
  </div>)
}

export default GetData;
