// import React from 'react'

// const TableSample = () => {
//   return (
//     <div>TableSample</div>
//   )
// }

// export default TableSample

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, subject, type, ID, Status, lastActive) {
  return { name, subject, type, ID, Status, lastActive };
}
// left
const rows = [
  createData(
    "Alex James",
    "I want to return the product",
    "Return product",
    "#113-5671",
    "Open",
    "Today"
  ),
  createData(
    "Alex James",
    "I want to return the product",
    "Return product",
    "#113-5671",
    "Open",
    "Today"
  ),
  createData(
    "Alex James",
    "I want to return the product",
    "Return product",
    "#113-5671",
    "Open",
    "Today"
  ),
  createData(
    "Alex James",
    "I want to return the product",
    "Return product",
    "#113-5671",
    "Open",
    "Today"
  ),
  createData(
    "Alex James",
    "I want to return the product",
    "Return product",
    "#113-5671",
    "Open",
    "Today"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Subject</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Last Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.subject}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.ID}</TableCell>
              <TableCell align="left">{row.Status}</TableCell>
              <TableCell align="left">{row.lastActive}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
