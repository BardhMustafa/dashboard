import { useState } from 'react';
import { useFormik } from 'formik';
import MainContainer from '@/shared/MainContainer';
import { ValidationSchemaLogin } from '@/shared/validation/schema/Login';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import {
  getLoginMutationOptions,
  login,
  useLogin,
} from '@/services/api/generated/endpoints';
import { userStore } from '@/store/userStore';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const initialUserLoginData = {
    email: '',
    password: '',
  };
  const { setAccessToken } = userStore();
  const { mutate, data, isLoading, isError, isSuccess } = useLogin();
  const formik = useFormik({
    initialValues: initialUserLoginData,
    validationSchema: ValidationSchemaLogin,
    onSubmit: async (values) => {
      let user = {
        email: values.email,
        password: values.password,
      };
      mutate({
        data: {
          user,
        },
      });
      isSuccess && setAccessToken(data?.user?.token);
      <Navigate to="/dashboard" />;
    },
  });

  return (
    <MainContainer>
      <Grid
        display="flex"
        width="300px"
        justifyContent="center"
        alignContent="center"
        flexDirection="column"
      >
        <Box display="flex" justifyContent="center">
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            color="primary"
            margin="normal"
            required
            fullWidth
            id="standard-error"
            name="email"
            error={formik.touched.email && Boolean(formik.errors.email)}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <TextField
            label="Password"
            type={'password'}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            error={formik.touched.email && Boolean(formik.errors.email)}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Button fullWidth type="submit" color="primary" variant="contained">
            Sign In
          </Button>
        </form>
      </Grid>
    </MainContainer>
  );
};

export default Login;
