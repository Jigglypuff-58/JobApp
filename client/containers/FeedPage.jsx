import React from 'react';
import { EditIcon, SunIcon } from '@chakra-ui/icons';
import Post from '../Components/Post';
import { useRef } from 'react';
import {
  FormControl,
  Box,
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
          <Button leftIcon={<SunIcon />}>Home</Button>
        </div>
        <div className='post-button'>
          <Button onClick={onOpen} leftIcon={<EditIcon />}>Add Post</Button>
        
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Post</FormLabel>
              <Input ref={initialRef} placeholder='Post' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>URL</FormLabel>
              <Input placeholder='URL' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Post
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
      </div>
      <div className='post-container'>
        <Post />
      </div>
    </div>
  );
};

export default Feed;
