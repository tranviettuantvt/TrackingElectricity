import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router-dom";

function Tracking() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar/>
        </Grid>
        <Grid item xs={10}>
          <Outlet/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Tracking;
