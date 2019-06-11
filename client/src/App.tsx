import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Components/Table/Table";
import NewTicket from "./Components/NewTicket/NewTicket";
import Button from "@material-ui/core/Button";
import { Ticket } from "./Models/Ticket";
import { getAllTickets, deleteTicket } from "./Services/TicketBackend";

const App: React.FC = () => {
  const [addNewTicket, setAddNewTicket] = useState(false);
  const [tickets, updateTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    getAllTickets().then(updateTickets);
  }, []);

  const deleteTicketAndReload = (id: number) =>
    deleteTicket(id).then(() => getAllTickets().then(updateTickets));

  return (
    <div className="App">
      <h1> Awesome Jira Clone</h1>
      <div className="table-wrapper">
        <Table tickets={tickets} delete={deleteTicketAndReload} />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setAddNewTicket(true)}
      >
        Add new Ticket
      </Button>
      <NewTicket show={addNewTicket} close={() => setAddNewTicket(false)} />
    </div>
  );
};

export default App;
