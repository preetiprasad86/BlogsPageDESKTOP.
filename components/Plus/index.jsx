import React from "react";
import "./Plus.css";

function Plus(props) {
  const { src } = props;

  return (
    <div className="arrowsarrow-right">
      <img className="vector-1" src={src} />
    </div>
  );
}

export default Plus;
