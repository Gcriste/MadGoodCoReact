import React from 'react';
import { Formik, Field, Form } from 'formik';
// import { useForm } from 'react-hook-form';
import { Button, Grid, Box, InputLabel, Typography } from '@mui/material';

const ContactView = () => {
	return (
		<Formik
			initialValues={{
				fullName: '',
				email: '',
				message: '',
			}}
			onSubmit={(values, { resetForm }) => {
				console.log(values);
				resetForm({ values: '' });
			}}
		>
			<>
				<Grid
					item
					xs={12}
					sm={12}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						color: 'white',
					}}
				>
					<Typography variant='h4'>Contact us</Typography>
				</Grid>
				<Form>
					<Grid container justifyContent='space-around' py='16px'>
						<Grid item xs={12} sm={6}>
							<Box
								padding='8px'
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<InputLabel htmlFor='fullName' sx={{ color: 'white' }}>
									Full name *
								</InputLabel>
								<Field
									id='fullName'
									name='fullName'
									placeholder='John Doe'
									type='text'
									required={true}
									style={{ padding: '8px' }}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box
								padding='8px'
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<InputLabel htmlFor='email' sx={{ color: 'white' }}>
									Email address *
								</InputLabel>
								<Field
									id='email'
									name='email'
									placeholder='JohnDoe@gmailcom'
									type='email'
									required={true}
									style={{ padding: '8px' }}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} sm={12}>
							<Box
								padding='8px'
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<InputLabel htmlFor='message' sx={{ color: 'white' }}>
									Message *
								</InputLabel>
								<Field
									id='message'
									name='message'
									placeholder='Doe'
									type='text'
									required={true}
									component='textarea'
									rows='4'
									style={{
										padding: '8px',
									}}
								/>
							</Box>
						</Grid>
						<Box
							padding='8px'
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								mt: '24px',
							}}
						>
							<Button type='submit' variant='contained'>
								Submit
							</Button>
						</Box>
					</Grid>
				</Form>
			</>
		</Formik>
	);
};

export default ContactView;
