import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  CheckIcon,
} from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';

const Login = () => {
  return (
    <div className='login-page'>
      <div className='hero'>
        <h1>JobApp</h1>
        <p>Cool design or picture here</p>
      </div>
      <div className='login-component'>
        <FormControl id='input-wrapper'>
          <FormLabel>Email address</FormLabel>
          <Input type='email' />
          <FormLabel>Password</FormLabel>
          <Input type='password' />
          <Button> Submit</Button>
          <Button> Sign Up</Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Login;
