import React from 'react';
import { useRef } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  isOpen,
  onOpen,
  onClose
} from '@chakra-ui/react';
// import { CheckIcon } from '@chakra-ui/icons';

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Hooks for user input for sign up field
  const usernameRefSignUp = useRef()
  const passwordRefSignUp = useRef()
  const emailRefSignUp = useRef()

  // Hooks for user input for sign in field
  const usernameRefSignIn = useRef();
  const passwordRefSignIn = useRef();


  const initialRef = useRef(null);
  const finalRef = useRef(null);
  
  const handleSignUp = (e) => {
    e.preventDefault();
    const username = usernameRefSignUp.current.value
    const password = passwordRefSignUp.current.value
    const email = emailRefSignUp.current.value
    console.log('FROM SIGNUP: ', username, password, email)
    // fetch('localhost:3000/signup', {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({userName: username, password, email})
    // })
    // .then(signUpResponse => {

    // })
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    const username = usernameRefSignIn.current.value;
    const password = passwordRefSignIn.current.value;
    console.log('FROM SIGN IN: ', username, password)
  }
  return (
    <div className='login-page'>
      <div className='hero'>
        <h1>JobApp</h1>
        <p>Cool design or picture here</p>
      </div>
      <div className='login-component'>
        <FormControl id='input-wrapper'>
          <FormLabel>Username</FormLabel>
          <Input ref={usernameRefSignIn} type='username' />
          <FormLabel>Password</FormLabel>
          <Input ref={passwordRefSignIn} type='password' />
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
