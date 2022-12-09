import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TheatersIcon from '@mui/icons-material/Theaters';
import PhotoIcon from '@mui/icons-material/Photo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const links = [
  {
    text: 'Home',
    href: '/',
    'data-testid': 'home',
    icon: <HomeIcon />,
  },
  {
    text: 'About',
    href: '/about',
    'data-testid': 'about',
    icon: <InfoIcon />,
  },
  {
    text: 'Shows',
    href: '/shows',
    'data-testid': 'shows',
    icon: <TheatersIcon />,
  },
  {
    text: 'Photos',
    href: '/photos',
    'data-testid': 'photos',
    icon: <PhotoIcon />,
  },
  {
    text: 'Merch',
    href: '/merch',
    'data-testid': 'merch',
    icon: <StorefrontIcon />,
  },
  {
    text: 'Contact',
    href: '/contact',
    'data-testid': 'contact',
    icon: <ContactPageIcon />,
  },
];

export default links;
