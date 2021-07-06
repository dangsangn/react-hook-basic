import React from "react";

function Memo(props) {
  const { message } = props;
  console.log("change ? ");
  return <div>Have a message: {message}</div>;
}

export default React.memo(Memo);
