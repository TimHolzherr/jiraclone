import React from "react";
import "./App.css";
import Table from "./Table/Table";
import Button from "@material-ui/core/Button";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1> Awesome Jira Clone</h1>
      <div className="table-wrapper">
        <Table />
      </div>
      <Button variant="contained" color="primary">
        Add new Ticket
      </Button>
      <div className="backdrop">
        <div className="modal">
          <h2>Create new Ticket</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" required />
            <label htmlFor="owner">Owner</label>
            <input type="text" id="owner" required />
            <Button variant="contained" color="primary">
              Add new Ticket
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
