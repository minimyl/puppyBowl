import React, {useState} from "react";
import {Navbar} from "./";

const Puppies = [
  {name: "Tart", id: 558},
  {name: "Sky", id: 559},
  {name: "Pablo", id: 600},
  {name: "Kye", id: 601}
];


const Main = () => {
  const[contestants, setContestants] = useState(Puppies)
  return (
    <div id="main">
    <Navbar/>
  </div>
  );
};

export default Main;
