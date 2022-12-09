import React from 'react';
import { Typography, Box, Grid, Link, Card } from '@mui/material';
import img from '../images/BlakePhotoshoot.JPEG';

const AboutView = () => {
  return (
    <Box
      textAlign={{ xs: 'center', sm: 'unset' }}
      sx={{
        background: 'rgba(170,186,205,.2)',
        padding: '16px',
      }}
    >
      <Grid
        item
        xs={12}
        sm={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Typography variant='h4'>The band</Typography>
      </Grid>
      <Grid container justifyContent='space-around' py='16px'>
        <Grid item xs={12} sm={6}>
          <Card>
            <Box
              padding='8px'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <img
                width='100%'
                height='100%'
                src={img}
                alt={'photo of the band'}
              />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <Box
              padding='8px'
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                variant='h7'
                marginTop={{ xs: '24px' }}
              >
                The members of Maddie in Good Company met in the winter of 2018
                at a Janis Joplin tribute show in Nashville, TN. With magic in
                the air and music in their hearts the Soul n' Roll band was
                formed. Over the last 4 years they have played historic venues,
                released 4 songs and are in the process of writing and recording
                an album.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                marginTop={{ xs: '24px' }}
              >
                The members of the band believe they were lucky enough to find
                each other on a serendipitous night and havesince become family.
                Their objective is to share that feeling with others, so
                remember…You’re in Good Company.
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutView;
