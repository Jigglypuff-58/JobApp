import { useRef } from 'react';
import {
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
  useDisclosure,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

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
          <Button leftIcon={<CheckIcon />}> Sign In</Button>
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
                <FormLabel>Email Address</FormLabel>
                <Input ref={initialRef} placeholder='Email Address' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
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
