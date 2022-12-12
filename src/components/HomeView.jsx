import React from 'react';
import { Box } from '@mui/material';
import mainPic from '../images/underdog.jpg';
import SingleSection from './SingleSection';

const HomeView = () => {
  return (
    <>
      <Box
        padding="8px"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: `url(${mainPic})`,
          minHeight: '700px',
        }}
      ></Box>
      <SingleSection />
    </>
  );
};

export default HomeView;
