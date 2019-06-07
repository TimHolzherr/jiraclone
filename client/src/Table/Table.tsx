import React from "react";
import "./Table.css";

// import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

let id = 0;
function createData(
  name: string,
  description: string,
  owner: string,
  isComplete: boolean
) {
  id += 1;
  return { id, name, description, owner, isComplete };
}

const rows = [
  createData(
    "Clean first floor",
    "Clean everything in the first flor",
    "Luc",
    false
  ),
  createData(
    "Create awesome app",
    "Create app which generates a lot of revenue",
    "You",
    false
  ),
  createData("Brush your teeth", "Brush your teeth carefully", "Tim", true)
];

const myTable: React.FC = () => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Is Complete</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.owner}</TableCell>
                <TableCell>
                  <input type="checkbox" checked={row.isComplete} />
                </TableCell>
                <TableCell>
                  <button>Delete</button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default myTable;
