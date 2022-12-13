import React from 'react';
import { Typography, Box, Grid, Link } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TikTokIcon from '../contstants/TikTokIcon';
const Footer = () => {
	return (
		<>
			<Box
				component='footer'
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
					sx={{ display: 'flex', justifyContent: 'center', mt: '24px' }}
				>
					<Typography variant='h4'>Contact</Typography>
				</Grid>
				<Grid container justifyContent='space-around'>
					<Grid item xs={12} sm={4}>
						<Box
							padding='8px'
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
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
								<RoomIcon /> Nashville, TN
							</Typography>

							<Typography
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
								variant='h7'
								marginTop={{ xs: '24px' }}
							>
								<EmailIcon />

								<Link href={'mailto:maddieingoodcompany@gmail.com'}>
									MaddieinGoodCompany@gmail.com
								</Link>
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
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
								Follow us on social media
							</Typography>

							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
								marginTop={{ xs: '24px' }}
							>
								<Link
									target='_blank'
									href='https://www.facebook.com/MaddieInGoodCompany/'
									mx='4px'
								>
									<FacebookIcon fontSize='large' />
								</Link>
								<Link
									target='_blank'
									href='https://instagram.com/maddgoodco?igshid=NDA1YzNhOGU='
									mx='4px'
								>
									<InstagramIcon sx={{ color: '#8a3ab9' }} fontSize='large' />
								</Link>
								<TikTokIcon />
							</Box>
						</Box>
					</Grid>
				</Grid>
				<Typography
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
					variant='body2'
					marginTop='16px'
				>
					©2022 MaddGoodCo, Inc. All Rights Reserved.
				</Typography>
			</Box>
		</>
	);
};

export default Footer;
