import NavBar from './NavBar';
import DrawerBar from './DrawerBar';
import { Box } from '@mui/material';
import links from '../contstants/links';

function Layout({ children }) {
  return (
    <>
      <NavBar links={links} />
      <Box
        component='main'
        sx={{
          display: 'flex',
          flex: '1 auto',
        }}
      >
        <Box
          sx={{
            margin: '0 auto',
            maxWidth: '750px',
            padding: '48px 16px',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}

export default Layout;
