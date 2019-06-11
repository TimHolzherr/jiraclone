import React from "react";
import "./Modal.css";

const Modal: React.FC = props => <div className="modal">{props.children}</div>;

export default Modal;
