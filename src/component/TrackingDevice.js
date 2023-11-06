import {
    Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}
function createData(deviceId, room, status, energy, cost, notice, category) {
  return { deviceId, room, status, energy, cost, notice, category };
}

const rows = [
  createData("A001", "271", "Active", "755", "199", "", "Floor 1"),
  createData("A001", "271", "Active", "755", "199", "", "Floor 1"),
  createData("A001", "271", "Active", "755", "199", "", "Floor 1"),
  createData("A001", "271", "Active", "755", "199", "", "Floor 1"),
  createData("A001", "271", "Active", "755", "199", "", "Floor 1"),
];

function preventDefault(event) {
  event.preventDefault();
}

function TrackingDevice() {
  return (
    <React.Fragment>
      <Title>Devices Tracking Details</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Room</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Energy</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Notice</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.deviceId}</TableCell>
              <TableCell>{row.room}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{`${row.energy}WH`}</TableCell>
              <TableCell>{`$${row.cost}`}</TableCell>
              <TableCell>{row.notice}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}

export default TrackingDevice;
