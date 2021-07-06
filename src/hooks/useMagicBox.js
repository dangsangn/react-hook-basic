import { useEffect, useState, useRef } from "react";

function getRandomColor(colorRef) {
  const LIST_COLOR = ["red", "green", "yellow"];
  let indexCur = LIST_COLOR.indexOf(colorRef);
  LIST_COLOR.splice(indexCur, 1);
  //console.log(listNew);
  const lengList = LIST_COLOR.length;
  const indexColor = Math.floor(Math.random() * lengList);

  return LIST_COLOR[indexColor];
}

function useMagicBox() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef(color);
  console.log("1: ", color);
  useEffect(() => {
    const changeColor = setInterval(() => {
      const colorChange = getRandomColor(colorRef.current);
      colorRef.current = colorChange;
      console.log("3: ", color);
      setColor(colorChange); // chi setColor 1 lan
    }, 2000);
    return () => {
      clearInterval(changeColor);
    };
  }, []);
  console.log("2: ", color);
  return { color };
}

export default useMagicBox;
