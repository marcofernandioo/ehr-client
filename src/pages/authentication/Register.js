/* eslint-disable no-unused-vars */
import React from 'react';

import { Link } from 'react-router-dom';
import { register } from 'api/index';

// material-ui
// import { Grid, Stack, Typography } from '@mui/material';

// project import

import AuthWrapper from './AuthWrapper';

// import { useEffect, useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  // Box,
  Button,
  // Divider,
  FormControl,
  // FormHelperText,
  Grid,
  // MUILink,
  // IconButton,
  // InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Select,
  MenuItem
} from '@mui/material';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
// import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';


// ================================|| REGISTER ||================================ //


const APIregister = async (data) => {
  try {
    const response = await fetch(`http://localhost:8000/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error User Registration:', error.message);
    throw error;
  }
}

const Register = () => {
  const [data, setData] = React.useState({});
  // const [showPassword, setShowPassword] = React.useState(false);
  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const onChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = () => {
    APIregister(data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    alert('Registered, Open Console for Keypair');
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Sign up</Typography>
            <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              Already have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="company-signup">Username</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="company-signup"
                  value={data.username}
                  name="username"
                  onChange={onChangeData}
                  inputProps={{}}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="email-signup">Role</InputLabel>
                  <Select value={data.role} onChange={onChangeData} name={'role'}>
                    <MenuItem value={'Staff'}>Staff</MenuItem>
                    <MenuItem value={'Patient'}>Patient</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            {/* <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password-signup">Private Key</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="password-signup"
                  type={showPassword ? 'text' : 'password'}
                  value={data.privateKey}
                  name="privateKey"
                  onChange={onChangeData}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end" size="large">
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="******"
                  inputProps={{}}
                />
              </Stack>
            </Grid> */}
            <Grid item xs={12}>
              <AnimateButton>
                <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary" onClick={onSubmit}>
                  Create Account
                </Button>
              </AnimateButton>
            </Grid>
            {/* <Grid item xs={12}>
              <Divider>
                <Typography variant="caption">Sign up with</Typography>
              </Divider>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};
export default Register;
