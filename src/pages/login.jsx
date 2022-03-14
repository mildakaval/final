import React from 'react';
import { TextField, Grid } from "@mui/material";
import logo from './logo.jpg';
import { useFormik } from "formik";
import AuthForm from "../components/auth-form/auth-form";
import * as yup from "yup";

const validationSchema = yup.object({
    email: yup.string("Įveskite el. pašto adresą").required("Laukas yra privalomas"),
    password: yup.string("Įveskite slaptažodį").required("Laukas yra privalomas"),
  });
  
  const initialValues = {
    email: "",
    password: "",
  };

  const Login = () => {
    const formik = useFormik({
      initialValues: initialValues,
      enableReinitialize: true,
      validationSchema: validationSchema,
      onSubmit: (values) => console.log(values),
    });


      return (   
     <AuthForm 
      title="Prisijunk!"
      linkTo="/register"
      linkTitle="Jei neturite paskyros, užsiregistruokite"
      onSubmit={formik.handleSubmit}
    > 
    
    <div className="logo">
      <img src={logo} height={120} width={440}/>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoFocus
            id="email"
            variant="filled"
            name="email"
            label="El. paštas"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 2 }}>
        <TextField
            fullWidth
            id="password"
            variant="filled"
            name="password"
            label="Slaptažodis"
            type="Slaptažodis"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
      };

export default Login;