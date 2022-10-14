import React from "react";
import DogOne from "./Profile1";


const PuppyProfile = (props) => {
  return (
    <div id="test">
      {props.puppy.map((puppy, index) => {
        return (
          <table id="dogList" key={puppy.id}>
            <tbody>
            <DogOne />
              <tr>
                <td> {puppy.name} </td>
                <td> {puppy.id} </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
    
  );
};


export default PuppyProfile;
