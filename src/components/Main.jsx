import React, {useState} from "react";
import {Navbar} from "./";
import GetData from "./PuppyList"
// import PuppyProfile from './PuppyProfile'
// import DogOne from "./Profile1";



// const Puppies = [
//   {name: "Tart", id: 558},
//   {name: "Sky", id: 559},
//   {name: "Pablo", id: 600},
//   {name: "Kye", id: 601}

// ];


const Main = () => {
  // const [puppy, setPuppy] = useState(Puppies)
  return (
    <div id="main">
    <Navbar/>
    <GetData/>
    {/* <PuppyProfile puppy={puppy} /> */}
    
  </div>
  );
};

export default Main;
