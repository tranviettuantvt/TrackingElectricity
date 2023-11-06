import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
function InitialSetting() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid
          container
          sx={{pt:"0.8rem", justifyContent: "flex-start", alignItems: "center", gap:"2rem" }}
        >
          <Grid item xs={12} md={8} lg={5}>
            <Card
              sx={{
                py: 3,
                px: 2,
                maxWidth: 130,
                display: "flex",
                alignItems: "center",
              }}
            >
              <AddBoxIcon sx={{ fontSize: 50, mr: 2 }} />
              <Typography
                sx={{ fontSize: 18, mb: 0 }}
                color="text.secondary"
                gutterBottom
              >
                Floor 2nd
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={5}>
            <Card
              sx={{
                py: 3,
                px: 2,
                maxWidth: 130,
                display: "flex",
                alignItems: "center",
              }}
            >
              <AddBoxIcon sx={{ fontSize: 50, mr: 2 }} />
              <Typography
                sx={{ fontSize: 18, mb: 0 }}
                color="text.secondary"
                gutterBottom
              >
                Floor 2nd
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={5}>
            <Card
              sx={{
                py: 3,
                px: 2,
                maxWidth: 130,
                display: "flex",
                alignItems: "center",
              }}
            >
              <AddBoxIcon sx={{ fontSize: 50, mr: 2 }} />
              <Typography
                sx={{ fontSize: 18, mb: 0 }}
                color="text.secondary"
                gutterBottom
              >
                Floor 2nd
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={5}>
            <Card
              sx={{
                py: 3,
                px: 2,
                maxWidth: 130,
                display: "flex",
                alignItems: "center",
              }}
            >
              <AddBoxIcon sx={{ fontSize: 50, mr: 2 }} />
              <Typography
                sx={{ fontSize: 18, mb: 0 }}
                color="text.secondary"
                gutterBottom
              >
                Floor 2nd
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default InitialSetting;
