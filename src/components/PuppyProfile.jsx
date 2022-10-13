import React from "react";

const PuppyProfile = (props) => {
  return (
    <div id="test">
      {props.puppy.map((puppy, index) => {
        return (
          <table id="dogList" key={puppy.id}>
            <div id="listId">
              <tbody>
                <tr>
                  <td> {puppy.name} </td>
                  <td> {puppy.id} </td>
                </tr>
              </tbody>
            </div>
          </table>
        );
      })}

      <div>
        <img
          src="https://media.emirates247.com/images/2013/06/Ugliest%20dog/25.JPG"
          alt=""
          height="200"
        />
      </div>
    </div>
  );
};
// key={contact.id}>

export default PuppyProfile;
