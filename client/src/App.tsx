import React from "react";
import "./App.css";
import Table from "./Table/Table";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1> Awesome Jira Clone</h1>
      <div className="App-header">
        <Table />
      </div>
      <button>Add new Ticket</button>
    </div>
  );
};

export default App;
