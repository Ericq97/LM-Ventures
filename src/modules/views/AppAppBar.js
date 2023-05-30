import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Scroll from 'react-scroll'

const rightLink = {
  fontSize: 20,
  color: 'common.white',
  ml: 3,
};



function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} 
          />
          {/* <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 40 }}
          >
            {'VM Ventures'}
          </Link> */
          <Box
                component="img"
                src="/static/themes/onepirate/logo.png"
                alt="graph"
                sx={{ height: 60 }}
              />
          }
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
            variant="h6"
            underline="none"
            sx={rightLink}
              href="/"
              onClick={e => {
              let hero = document.getElementById("hero");
              e.preventDefault();  // Stop Page Reloading
              hero.scrollIntoView({ behavior: "smooth", block: "start"});
              }}
              >
              {'Hero'}
              </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={rightLink}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
    
  );
}

export default AppAppBar;