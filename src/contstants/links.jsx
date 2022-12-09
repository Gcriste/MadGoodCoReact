import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TheatersIcon from '@mui/icons-material/Theaters';
import PhotoIcon from '@mui/icons-material/Photo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

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
    text: 'Music',
    href: 'https://open.spotify.com/artist/6kLV2oqFWrSvlFWlsw97QH?si=Xen0klhnSpe5IGWMUiGswQ',
    'data-testid': 'music',
    icon: <MusicNoteIcon />,
    target: '_blank',
    rel: 'noopener',
  },
  {
    text: 'Videos',
    href: 'https://www.youtube.com/channel/UC4iFrS6hKpvFr3QVqszlwRQ',
    'data-testid': 'videos',
    icon: <OndemandVideoIcon />,
    target: '_blank',
    rel: 'noopener',
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
