import React from 'react';
import {
  Button,
} from '@mui/material';


const FormButton = ({ children, ...rest }) => (
  
  <Button
  style={{
    backgroundColor: "#132C33",
    borderRadius: 20,
    border: "1px solid black",
    color: "#A3D2CA",
    marginBottom: "10px",
    height: "40px"
  }}
    type="submit"
    fullWidth
    variant="contained"
    sx={{ height: 50, mb: 1 }}
    {...rest}
  >
    {children}
  </Button>
);

export default FormButton;
