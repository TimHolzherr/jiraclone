import React, { useState } from "react";
import "./NewTicket.css";
import Button from "@material-ui/core/Button";
import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";
import { Ticket } from "../../Models/Ticket";

type NewTicketProps = {
  show: boolean;
  saveTicket: (t: Ticket) => void;
};

const emptyForm = {
  name: "",
  description: "",
  owner: ""
};

const NewTicket: React.FC<NewTicketProps> = props => {
  const [ticket, updateTicket] = useState(emptyForm);

  const saveNewTicket = () => {
    props.saveTicket(
      new Ticket(ticket.name, ticket.description, ticket.owner, false)
    );
    updateTicket(emptyForm);
  };

  return (
    <Backdrop show={props.show}>
      <Modal>
        <h2>Create new Ticket</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={ticket.name}
            onChange={e => updateTicket({ ...ticket, name: e.target.value })}
            required
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={ticket.description}
            onChange={e =>
              updateTicket({ ...ticket, description: e.target.value })
            }
            required
          />
          <label htmlFor="owner">Owner</label>
          <input
            type="text"
            id="owner"
            value={ticket.owner}
            onChange={e => updateTicket({ ...ticket, owner: e.target.value })}
            required
          />
          <Button
            disabled={!(ticket.name && ticket.owner && ticket.description)}
            variant="contained"
            color="primary"
            onClick={saveNewTicket}
          >
            Add new Ticket
          </Button>
        </form>
      </Modal>
    </Backdrop>
  );
};

export default NewTicket;
