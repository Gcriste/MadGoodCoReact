import { Link, Box, Drawer } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const DrawerComponent = ({ links }) => {
  const location = useLocation();
  return (
    <>
      <Drawer>
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
      </Drawer>
    </>
  );
};
export default DrawerComponent;
