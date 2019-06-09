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
      <Button  className="main-button" variant="contained" color="primary">
        Add new Ticket
      </Button>
    </div>
  );
};

export default App;
