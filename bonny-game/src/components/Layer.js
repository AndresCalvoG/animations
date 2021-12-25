import React from "react";
import "./styles/layer.css";

function Layer(props) {
  return <div className={props.clase}>{props.children}</div>;
}

export default Layer;
