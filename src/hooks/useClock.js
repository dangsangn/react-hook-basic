import { useEffect, useState } from "react";

function showTime(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours} : ${minutes} : ${seconds}`;
}

function Clock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const setTimeClock = setInterval(() => {
      const newTime = showTime(new Date());
      setTimeString(newTime);
    }, 1000);
    return () => {
      clearInterval(setTimeClock);
    };
  }, []);

  return { timeString };
}

export default Clock;
