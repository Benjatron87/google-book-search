import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper"><p className="results">{props.results} </p>{props.children}</div>;
}

export default Wrapper;