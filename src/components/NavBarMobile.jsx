import { Link, Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const NavBarMobile = ({ links }) => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;
  const drawer = (
    <div>
      <Toolbar />
      <List>
        <Link
          variant='h4'
          component={RouterLink}
          key={'/'}
          to={'/'}
          sx={{ ml: 2 }}
          color='black'
          underline='none'
          onClick={handleDrawerToggle}
        >
          MadGoodCo
        </Link>
        {links.map(
          ({ text, href, 'data-testid': dataTestId, icon, target, rel }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {target ? (
                  <a
                    target={target}
                    rel={rel}
                    href={href}
                    style={{
                      cursor: 'pointer',
                      marginLeft: '10px',
                      marginRight: '10px',
                      fontWeight: href === location.pathname ? 'bold' : 'none',
                      color: 'black',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <ListItemIcon>{icon}</ListItemIcon> {text}
                  </a>
                ) : (
                  <Link
                    onClick={handleDrawerToggle}
                    component={RouterLink}
                    key={href}
                    to={href}
                    color='black'
                    underline='hover'
                    aria-current={
                      href === location.pathname ? 'page' : undefined
                    }
                    sx={{
                      cursor: 'pointer',
                      marginLeft: '10px',
                      marginRight: '10px',
                      fontWeight: href === location.pathname ? 'bold' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    data-testid={dataTestId}
                    target={target}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    {text}
                  </Link>
                )}
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );
  return (
    <>
      <Box
        sx={{
          background: '#2d2d30',
          padding: '30px',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: '#fff' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavBarMobile;
