import { Link, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(10),
//     display: 'flex',
//   },
//   logo: {
//     flexGrow: '1',
//     cursor: 'pointer',
//   },
//   link: {
//     textDecoration: 'none',
//     color: 'white',
//     fontSize: '20px',
//     marginLeft: theme.spacing(20),
//     '&:hover': {
//       color: 'yellow',
//       borderBottom: '1px solid white',
//     },
//   },
// }));

const NavBar = ({ links }) => {
  const location = useLocation();

  //   const classes = useStyles();

  return (
    // <Box
    //   sx={{
    //     background: '#2d2d30',
    //     padding: '30px',
    //     width: '100%',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }}
    // >
    <AppBar
      sx={{
        background: '#2d2d30',
        padding: '20px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      position='static'
    >
      <Link
        variant='h4'
        component={RouterLink}
        key={'/'}
        to={'/'}
        sx={{ textAlign: 'left' }}
        color='#fff'
        underline='none'
      >
        MaddGoodCo
      </Link>
      <Toolbar>
        <div>
          {links.map(({ text, href, 'data-testid': dataTestId }) => (
            <Link
              component={RouterLink}
              key={href}
              to={href}
              color='#fff'
              underline='hover'
              aria-current={href === location.pathname ? 'page' : undefined}
              sx={{
                cursor: 'pointer',
                marginLeft: '10px',
                marginRight: '10px',
                fontWeight: href === location.pathname ? 'bold' : 'none',
              }}
              data-testid={dataTestId}
            >
              {text}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
    // </Box>
  );
};

export default NavBar;
