import React from "react";
import "./Backdrop.css";

const Backdrop: React.FC<{ show: boolean }> = props =>
  props.show ? <div className="backdrop">{props.children}</div> : null;

export default Backdrop;
