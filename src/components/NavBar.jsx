import { Link, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NavBar = ({ links }) => {
  const location = useLocation();

  return (
    <>
      <Box
        sx={{
          background: '#2d2d30',
          padding: '30px',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          display: { md: 'flex', sm: 'none', xs: 'none' },
        }}
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
          MadGoodCo
        </Link>

        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {links.map(({ text, href, 'data-testid': dataTestId, target, rel }) =>
            target ? (
              <a
                target={target}
                rel={rel}
                href={href}
                style={{
                  cursor: 'pointer',
                  marginLeft: '10px',
                  marginRight: '10px',
                  fontWeight: href === location.pathname ? 'bold' : 'none',
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                {text}
              </a>
            ) : (
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
                target={target}
              >
                {text}
              </Link>
            )
          )}
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
