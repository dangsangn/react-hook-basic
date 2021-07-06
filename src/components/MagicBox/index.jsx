import React from "react";
import "./MagicBox.scss";
import useMagicBox from "./../../hooks/useMagicBox";
MagicBox.propTypes = {};

function MagicBox() {
  const { color } = useMagicBox();
  return <div className="box-color" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
