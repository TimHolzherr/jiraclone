import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Components/Table/Table";
import NewTicket from "./Components/NewTicket/NewTicket";
import Button from "@material-ui/core/Button";
import { Ticket } from "./Models/Ticket";
import {
  getAllTickets,
  deleteTicket,
  createNewTicket,
  registerLoadingInterceptor,
  updateTicketInBackend
} from "./Services/TicketBackend";
import Spinner from "./Components/Spinner/Spinner";

const App: React.FC = () => {
  const [addNewTicket, setAddNewTicket] = useState(false);
  const [tickets, updateTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);
  const loadTickets = () => getAllTickets().then(updateTickets);

  useEffect(() => {
    registerLoadingInterceptor(setLoading);
    loadTickets();
  }, []);

  const deleteTicketAndReload = (id: number) =>
    deleteTicket(id).then(loadTickets);

  const storeNewTicketAndReload = (ticket: Ticket) => {
    setAddNewTicket(false);
    createNewTicket(ticket).then(loadTickets);
  };

  const updateTicketsAndReload = (ticket: Ticket) => {
    updateTicketInBackend(ticket).then(loadTickets);
  };

  return (
    <div className="App">
      <h1> Awesome Jira Clone</h1>
      <div className="table-wrapper">
        <Table
          tickets={tickets}
          delete={deleteTicketAndReload}
          update={updateTicketsAndReload}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setAddNewTicket(true)}
      >
        Add new Ticket
      </Button>
      <NewTicket
        show={addNewTicket}
        saveTicket={ticket => storeNewTicketAndReload(ticket)}
      />
      <Spinner show={loading} />
    </div>
  );
};

export default App;
