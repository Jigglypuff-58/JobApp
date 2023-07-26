import React from 'react';
import { EditIcon, SunIcon } from '@chakra-ui/icons';
import Post from '../Components/Post';
import { useRef } from 'react';
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
  onClose,
} from '@chakra-ui/react';


const Feed = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <div>
      <div className='nav'>
        <div className='home-button'>
          <Button leftIcon={<SunIcon />}></Button>
        </div>
        <div className='post-button'>
          <Button onclick={onOpen}leftIcon={<EditIcon />}>Add Post</Button>
        </div>
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
                <FormLabel>Username</FormLabel>
                <Input ref={initialRef} placeholder='Username' />
              </FormControl>
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
      <div className='post-container'>
        <Post />
      </div>
    </div>
  );
};

export default Feed;