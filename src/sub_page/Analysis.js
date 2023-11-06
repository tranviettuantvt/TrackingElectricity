import React from 'react'
import TrackingDevice from '../component/TrackingDevice'
import { Box, Container, Grid, Paper, Toolbar } from '@mui/material'
import Recommend from '../component/Recommend'
import InitialSetting from '../component/InitialSetting'

function Analysis() {
  return (
    <div className='analysis'>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 8, mb: 4, ml:8 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={7}>
                <Paper
                  sx={{
                    p: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 292,
                  }}
                >
                    <Recommend/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={5}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 260,
                  }}
                >
                    <InitialSetting/>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <TrackingDevice/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
    </div>
  )
}

export default Analysis