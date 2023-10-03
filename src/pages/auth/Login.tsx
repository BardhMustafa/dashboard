import { useState } from 'react';
import { useFormik } from 'formik';
import MainContainer from '@/shared/MainContainer';
import { ValidationSchemaLogin } from '@/shared/validation/schema/Login';
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { login } from '@/services/api/generated/endpoints';
import { userStore } from '@/store/userStore';
import { Form, Navigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import BackDropLoader from '@/components/common/BackDropLoader';

const Login = () => {
  const initialUserLoginData = {
    email: '',
    password: '',
  };
  const { setAccessToken } = userStore();
  const [errorContainer, setErrorContainer] = useState<string | null>(null);

  const { isLoading, mutate } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      setAccessToken(response.user.token);
      
    },
    onError: (error) => {
      const errorResponse = error as any;
      const responseError =
        errorResponse.response?.data?.errors?.['email or password']?.join('');
      setErrorContainer(
        `Email or Password ${responseError}` || 'An error occurred'
      );
      setTimeout(() => {
        setErrorContainer(null);
      }, 5000);
    },
  });

  const formik = useFormik({
    initialValues: initialUserLoginData,
    validationSchema: ValidationSchemaLogin,
    onSubmit: async (values) => {
      let user = {
        email: values.email,
        password: values.password,
      };
      mutate({ user });
      <Navigate to="/dashboard" />;
    },
  });
  return (
    <MainContainer>
      <BackDropLoader open={isLoading} />
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
            helperText={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            label="Password"
            variant="outlined"
            type={'password'}
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {errorContainer && (
            <Typography color="error" margin={1}>
              {errorContainer}
            </Typography>
          )}
          <Button
            fullWidth
            size="large"
            type="submit"
            color="primary"
            variant="contained"
          >
            Sign In
          </Button>
        </form>
      </Grid>
    </MainContainer>
  );
};

export default Login;
