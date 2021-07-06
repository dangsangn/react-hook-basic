import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SlideBar.scss";

SlideBar.propTypes = {
  randomColor: PropTypes.func,
};

function randomColor() {
  const listColor = ["red", "blue", "orange", "yellow"];
  const lengColor = listColor.length;
  const number = Math.trunc(Math.random() * lengColor);
  return listColor[number];
}

function SlideBar() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("color") || "red";
  });

  function handelRandomColor() {
    let newColor = randomColor();
    setColor(newColor);
    localStorage.setItem("color", color);
  }
  console.log(color);

  return (
    <div
      style={{ backgroundColor: color }}
      className="container"
      onClick={handelRandomColor}
    ></div>
  );
}

export default SlideBar;
