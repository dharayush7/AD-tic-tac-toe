import React from "react";

const Square = (props) => {
  return (
    <div
        onClick={props.onClick}
      style={{
        border: "1px solid",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      className="square"
    >
      <h5 
      style={{fontSize: "50px"}}>{ props.value }</h5>
    </div>
  );
};

export default Square;
