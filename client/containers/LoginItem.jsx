import React from 'react';
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  useDisclosure,
  isOpen,
  onOpen,
  onClose
} from '@chakra-ui/react';
// import { CheckIcon } from '@chakra-ui/icons';

const Login = () => {
  // React Router hook 
  const navigate = useNavigate();
  // chakraUI hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  // Hooks for user input for sign up field
  const usernameRefSignUp = useRef('')
  const passwordRefSignUp = useRef('')
  const emailRefSignUp = useRef('')

  // Hooks for user input for sign in field
  const usernameRefSignIn = useRef('');
  const passwordRefSignIn = useRef('');


  
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  
  const handleSignUp = (e) => {
    e.preventDefault();
    const username = usernameRefSignUp.current.value
    const password = passwordRefSignUp.current.value
    const email = emailRefSignUp.current.value
    fetch('localhost:3000/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userName: username, password, email})
    })
    .then(signUpResponse => {
      if (signUpResponse === 'successful') {
        toast({
          title: 'Account created',
          description: 'You have successfully created an account! Please sign in.',
          position: 'top',
          status: 'success',
          duration: 3000,
          isClosable: true
        })
      } else {
        toast({
          title: 'Account username unavailable.',
          description: 'Please enter a new username.',
          position: 'top',
          status: 'fail',
          duration: 3000,
          isClosable: true
        })
      }
    })
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    const username = usernameRefSignIn.current.value;
    const password = passwordRefSignIn.current.value;
    fetch('localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userName: username, password})
    })
    .then(signInResponse => {
      if (signInResponse.result === 'verified') {
        navigate('/feed')
      } else {
        toast({
          title: 'Sign in failed',
          description: 'Username or password incorrect. Please try again.',
          position: 'top',
          status: 'fail',
          duration: 3000,
          isClosable: true,
        })
      }
    })
  }
  return (
    <div className='login-page'>
      <div className='hero'>
        <h1>JobApp</h1>
        <p>Cool design or picture here</p>
      </div>
      <div className='login-component'>
        <FormControl isRequired={true}>
          <FormLabel>Username</FormLabel>
          <Input ref={usernameRefSignIn} type='username'/>
          <FormLabel>Password</FormLabel>
          <Input ref={passwordRefSignIn} type='password'/>
          <Button onClick={handleSignIn}> Sign In</Button>
          <Button onClick={onOpen}> Sign Up</Button>
        </FormControl>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel >Username</FormLabel>
                <Input ref={usernameRefSignUp} placeholder='Username' />
              </FormControl>
              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input ref={emailRefSignUp} placeholder='Email Address' />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input ref={passwordRefSignUp} placeholder='Password' />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSignUp}>
                Sign Up
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Login;
