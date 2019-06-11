import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import { CircularProgress } from "@material-ui/core";
import "./Spinner.css";

const Spinner: React.FC<{ show: boolean }> = props => {
  return (
    <Backdrop show={props.show}>
      <div className="spinning-area">
        <CircularProgress className="spinner" />
      </div>
    </Backdrop>
  );
};

export default Spinner;
