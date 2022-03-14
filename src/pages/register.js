import React from "react";
import { TextField, Grid } from "@mui/material";
import logo from './logo.jpg';
import { useFormik } from "formik";
import * as yup from "yup";
import AuthForm from "../components/auth-form/auth-form";
import APIService from "../services/api-service";
import { height } from "@mui/system";

const validationSchema = yup.object({
  username: yup.string("Vartotojas").required("Laukas yra privalomas"),
  firstName: yup.string("Įveskite vardą").required("Laukas yra privalomas"),
  lastName: yup.string("Įveskite pavardę").required("Laukas yra privalomas"),
  email: yup.string("Įveskite el. paštą").required("Laukas yra privalomas"),
  password: yup.string("Įveskite slaptažodį").required("Laukas yra privalomas"),
  passwordConfirmation: yup.string("pakartokite slaptažodį").oneOf([yup.ref('password'), null],
  "Slaptažodis turi sutapti")
});

const initialValues = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const Register = () => {

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      APIService.addUser({ ...values, role: "user" });
    },
  });

  return (
 
    <AuthForm
      title="Užsiregistruok!"
      linkTo="/login"
      linkTitle="Jei turite paskyrą, prisijunkite"
      onSubmit={formik.handleSubmit}>

        <div className="logo">
          <img src={logo} height={30} width={160} style={{marginLeft: "135px"}}/>
        </div>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              name="username"
              variant="filled"
              size="small"
              autoComplete="username"
              fullWidth
              id="username"
              label="Vartotojas"
              autoFocus
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username} />
          </Grid>

          <Grid item xs={6} sm={6} lg={6}>
            <TextField
              name="firstName"
              variant="filled"
              size="small"
              autoComplete="firstname"
              fullWidth
              id="firstName"
              label="Vardas"
              autoFocus
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName} />
          </Grid>

          <Grid item xs={6} sm={6} lg={6}>
            <TextField
              name="lastName"
              variant="filled"
              size="small"
              autoComplete="lastname"
              fullWidth
              id="lastName"
              label="Pavardė"
              autoFocus
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName} />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="email"
              variant="filled"
              size="small"
              autoComplete="email"
              fullWidth
              id="email"
              label="El. paštas"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email} />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="password"
              variant="filled"
              size="small"
              autoComplete="password"
              fullWidth
              id="password"
              label="Slaptažodis"
              autoFocus
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password} />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="passwordConfirmation"
              variant="filled"
              size="small"
              autoComplete="passwordConfirmation"
              fullWidth
              id="passwordConfirmation"
              label="Pakartokite slaptažodį"
              autoFocus
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
              helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation} />
          </Grid>

          <Grid item sx={{ mb: 1 }} xs={12}>
          </Grid>
        </Grid>
      </AuthForm>
  );
};

export default Register;