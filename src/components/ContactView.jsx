import React from 'react';
import { Formik, Field, Form } from 'formik';
// import { useForm } from 'react-hook-form';
import { Button, Card, Grid, Box, InputLabel, Typography } from '@mui/material';

const ContactView = () => {
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        message: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => console.log(values));
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
          <Typography variant="h4">Contact us</Typography>
        </Grid>
        <Grid container justifyContent="space-around" py="16px">
          <Form>
            <Box
              padding="8px"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <InputLabel htmlFor="fullName" sx={{ color: 'white' }}>
                Full Name
              </InputLabel>
              <Field
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                type="text"
                required="true"
                style={{ padding: '8px' }}
              />
            </Box>
            <Box
              padding="8px"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <InputLabel htmlFor="email" sx={{ color: 'white' }}>
                Email
              </InputLabel>
              <Field
                id="email"
                name="email"
                placeholder="JohnDoe@gmailcom"
                type="email"
                required="true"
                style={{ padding: '8px' }}
              />
            </Box>{' '}
            <Box
              padding="8px"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <InputLabel htmlFor="message" sx={{ color: 'white' }}>
                Message
              </InputLabel>
              <Field
                id="message"
                name="message"
                placeholder="Doe"
                type="text"
                required="true"
                style={{ padding: '8px' }}
              />
            </Box>
            <Box
              padding="8px"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </Form>
        </Grid>
      </>
    </Formik>
  );
};

export default ContactView;
