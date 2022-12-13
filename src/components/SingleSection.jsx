import React from 'react';
import { Grid, Typography, Button, Box, Link } from '@mui/material';
import overFlowPic from '../images/Overlow.PNG';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '../contstants/TikTokIcon';

const SingleSection = () => {
	return (
		<Grid container justifyContent='space-around' py='24px'>
			<Grid item xs={12} sm={6}>
				<img
					width='100%'
					height='100%'
					src={overFlowPic}
					alt={'over flow pic'}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					my: '24px',
				}}
			>
				<Typography marginY={'8px'} variant='h2' color='white'>
					OVERFLOW
				</Typography>
				<Typography marginY={'8px'} variant='h5' color='white'>
					NEW SINGLE OUT NOW
				</Typography>

				<Box paddingTop={'16px'}>
					<Grid
						item
						xs={12}
						sm={12}
						display='flex'
						justifyContent='center'
						alignItems='center'
						mb='8px'
					>
						<Link
							target='_blank'
							href='https://www.facebook.com/MaddieInGoodCompany/'
							mx='4px'
						>
							<FacebookIcon fontSize='large' sx={{ color: 'white' }} />
						</Link>
						<Link
							target='_blank'
							href='https://instagram.com/maddgoodco?igshid=NDA1YzNhOGU='
							mx='4px'
						>
							<InstagramIcon sx={{ color: 'white' }} fontSize='large' />
						</Link>
						<TikTokIcon color='white' />
					</Grid>
					<Grid item xs={12} sm={12} mt='16px'>
						<Button variant='contained' sx={{ padding: '16px' }}>
							<a
								class='margin-small'
								href='https://open.spotify.com/track/55WCXfPee6WawXDGvT0ZHK?si=b46eab78453f44fd'
								style={{ textDecoration: 'none', color: 'white' }}
							>
								DOWNLOAD/STREAM
							</a>
						</Button>
					</Grid>
				</Box>
			</Grid>
		</Grid>
	);
};

export default SingleSection;
