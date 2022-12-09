import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import Footer from './Footer';
import { Box } from '@mui/material';
import links from '../contstants/links';
import bg from '../images/cloth.jpg';

function Layout({ children }) {
  return (
    <>
      <NavBar links={links} />
      <NavBarMobile links={links} />
      <Box
        component='main'
        sx={{
          display: 'flex',
          flex: '1 auto',
          backgroundImage: `url(${bg})`,
        }}
        style={{
          background: 'linear-gradient(to left, #414345, #232526)',
        }}
      >
        <Box
          sx={{
            margin: '0 auto',
            maxWidth: '1040px',
            padding: '48px 16px',
          }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
