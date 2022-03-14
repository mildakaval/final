import React from 'react';
import {
  Container,
  Box,
  Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';
import Button from './auth-form-button';

const AuthForm = ({
  children,
  title,
  linkTo,
  linkTitle,
  onSubmit,
}) => (
  
  <Container
  style={{
    padding: "90px 0px 0px 20px",
    height: "350px",
    marginBottom: "198px"
     }}
    maxWidth="xs"
    component="main"
    sx={{ pt: '7px' }}      
  >
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={{
        mb: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </Box>
      {children}
      <Button type="submit">
        {title}
      </Button>
      <Link to={linkTo}>
        {linkTitle}
      </Link>
    </Box>
  </Container>
);

export default AuthForm;
