import React from "react";
import "./NewTicket.css";
import Button from "@material-ui/core/Button";
import Backdrop from "./Backdrop/Backdrop";
import Modal from "./Modal/Modal";

const NewTicket: React.FC<{ show: boolean; close: () => void }> = props => {
  return (
    <Backdrop show={props.show}>
      <Modal>
        <h2>Create new Ticket</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
          <label htmlFor="description">Description</label>
          <input type="text" id="description" required />
          <label htmlFor="owner">Owner</label>
          <input type="text" id="owner" required />
          <Button variant="contained" color="primary" onClick={props.close}>
            Add new Ticket
          </Button>
        </form>
      </Modal>
    </Backdrop>
  );
};

export default NewTicket;
