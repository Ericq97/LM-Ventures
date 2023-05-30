import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.blue' }}
    >
      <Container sx={{ mt: 15, mb: 8, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={3}>
          <Grid item xs={12} md={2.5}>
            <Box sx={item}>
              <Box
                component="img"
                src="/static/themes/onepirate/productValues1.png"
                alt="suitcase"
                sx={{ height: 145 }}
              />
              <Typography variant="h5" sx={{ my: 5 }}>
                Active Companies      
              </Typography>
              {/* <Typography variant="h5">
                {
                  'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                }

                {
                  ', go for a mini-vacation just a few subway stops away from your home.'
                }
              </Typography> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item} variant="h2">
              <Box
                component="img"
                src="/static/themes/onepirate/productValues2.png"
                alt="graph"
                sx={{ height: 150 }}
              />
              <Typography variant="h5" sx={{ my: 5 }}>
                M&A or IPO
              </Typography>
              {/* <Typography variant="h5">
                {
                  'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                }

                {'your Sundays will not be alike.'}
              </Typography> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box sx={item}>
              <Box
                component="img"
                src="/static/themes/onepirate/productValues3.png"
                alt="clock"
                sx={{ height: 145 }}
              />
              <Typography variant="h5" sx={{ my: 5 }}>
                With International Offices
              </Typography>
              {/* <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={4.5}>
            <Box sx={item}>
                
              <Box
                component="img"
                src="/static/themes/onepirate/productValues4.png"
                alt="clock"
                sx={{ height: 150 }}
              />
              <Typography variant="h5" sx={{ my: 5 }}>
                Portfolio Valuation Combined
              </Typography>
              {/* <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;