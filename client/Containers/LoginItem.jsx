import React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  FormControl,
  FormLabel,
  Box,
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
    fetch('/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userName: username, password, email})
    })
    .then(data => data.json())
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
          duration: 3000,
          isClosable: true
        })
      }
    })
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('in handle sign in')
    const username = usernameRefSignIn.current.value;
    const password = passwordRefSignIn.current.value;
    fetch('/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userName: username, password})
    })
    .then(data => data.json())
    .then(async signInResponse => {
      if (signInResponse === 'verified') {
        await toast({
          title: 'Sign in successful!',
          position: 'top',
          status: 'success',
          duration: 3000,
          isClosable: true
        })
        navigate('/feed')
      } else {
        toast({
          title: 'Sign in failed',
          description: 'Username or password incorrect. Please try again.',
          position: 'top',
          duration: 3000,
          isClosable: true,
        })
        console.log('signInResponse',signInResponse)
      }
    })
  }
  return (
    <div className='login-page'>
      <div className='hero'>
        <h1>Jobby</h1>
        <p>Cool design or picture here</p>
      </div>
      <div className='login-component'>
        <FormControl className="login-area" isRequired={true}>
          <div>
            <FormLabel>Username</FormLabel>
            <Input ref={usernameRefSignIn} type='username'/>
          </div>
          <div>
            <FormLabel>Password</FormLabel>
            <Input ref={passwordRefSignIn} type='password'/>
          </div>
          <div className="button-container">
            <Button onClick={handleSignIn}> Sign In</Button>
            <div className="buttons">
              <div className="bar"></div>
              <p>or</p>
              <div className="bar"></div>
            </div>
            
            <Button onClick={onOpen}> Sign Up</Button>
          </div>
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
            <FormControl isRequired>
                <FormLabel >Username</FormLabel>
                <Input ref={usernameRefSignUp} placeholder='Username' />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input ref={emailRefSignUp} placeholder='Email Address' />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input ref={passwordRefSignUp} placeholder='Password' />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={handleSignUp}>
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
