import React from "react";
import Color from "./Color";
/* Add any imports you think you might need here! */

const Menu = (props) => {
  return (
    <div className="colorOptions">
      <Color color="red" handleClick={props.handleClick}></Color>
      <Color color="pink" handleClick={props.handleClick}></Color>
      <Color color="blue" handleClick={props.handleClick}></Color>
      <Color color="green" handleClick={props.handleClick}></Color>
    </div>
  );
};

export default Menu;
