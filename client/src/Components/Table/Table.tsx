import React from "react";
import "./Table.css";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import { Ticket } from "../../Models/Ticket";

const myTable: React.FC<{
  tickets: Ticket[];
  delete: (id: number) => void;
  update: (ticket: Ticket) => void;
}> = props => {
  const updateIsCompleted = (ticket: Ticket) =>
    props.update({ ...ticket, isCompleted: !ticket.isCompleted });
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
          {props.tickets.map(ticket => {
            return (
              <TableRow key={ticket.id}>
                <TableCell component="th" scope="row">
                  {ticket.name}
                </TableCell>
                <TableCell>{ticket.description}</TableCell>
                <TableCell>{ticket.owner}</TableCell>
                <TableCell>
                  <input
                    type="checkbox"
                    checked={ticket.isCompleted}
                    onClick={() => updateIsCompleted(ticket)}
                  />
                </TableCell>
                <TableCell>
                  <Fab
                    onClick={() => {
                      props.delete(ticket.id);
                    }}
                    aria-label="Delete"
                    size="small"
                    color="inherit"
                  >
                    <DeleteIcon />
                  </Fab>
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
