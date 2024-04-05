/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Link } from 'react-router-dom';


// project import

import AuthWrapper from './AuthWrapper';

// material-ui
import {
  // Box,
  Button,
  // Divider,
  FormControl,
  // FormHelperText,
  Grid,
  // MUILink,
  IconButton,
  InputAdornment,
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
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// import API from '../../api';


// ================================|| LOGIN ||================================ //

const APIlogin = async (credentials) => {
  try {
    const response = await fetch(`http://localhost:8000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error User Login:', error.message);
    throw error;
  }
}

const Login = () => {
  const [data, setData] = React.useState({});
  const [privateKey, setPrivateKey] = React.useState();
  const [username, setUsername] = React.useState();
  const [role, setRole] = React.useState();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = () => {
    console.log(privateKey);
    const data = {
      username,
      role,
      privateKey: btoa(privateKey)
    };
    console.log(data);
    APIlogin(data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }

  const onChangePrivateKey = (e) => {
    setPrivateKey(e.target.value);
  }

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
                  value={username}
                  name="username"
                  onChange={(e) => {setUsername(e.target.value)}}
                  inputProps={{}}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="email-signup">Role</InputLabel>
                  <Select value={role} onChange={(e) => {setRole(e.target.value)}} name={'role'}>
                    <MenuItem value={'Staff'}>Staff</MenuItem>
                    <MenuItem value={'Patient'}>Patient</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password-signup">Private Key</InputLabel>
                <OutlinedInput
                  fullWidth
                  multiline
                  id="password-signup"
                  type={showPassword ? 'text' : 'password'}
                  value={privateKey}
                  name="privateKey"
                  onChange={(e) => {setPrivateKey(e.target.value)}}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end" size="large">
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="*****************"
                  inputProps={{}}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <AnimateButton>
                <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary" onClick={onSubmit}>
                  Log In
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
export default Login;
