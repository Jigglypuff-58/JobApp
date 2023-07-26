import React from 'react';
import { EditIcon, SunIcon } from '@chakra-ui/icons';
import Post from '../Components/Post';
import { useRef, useState } from 'react';
import Languages from '../Components/Languages.jsx';
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';


const Feed = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const titleRef = useRef('');
  const companyRef = useRef('');
  const messageRef = useRef('');
  const salaryRef = useRef('');

  const [languages, setLanguages] = useState(new Set());

  const handleNewPost = async (e) => {
    e.preventDefault();
    const job_title = titleRef.current.value;
    const salary = companyRef.current.value;
    const message = messageRef.current.value;
    const company_name = salaryRef.current.value;
    const user_id = 1;

    // console.log('job_title:', job_title);
    // console.log('salary:', salary);
    // console.log('message:', message);
    // console.log('company_name:', company_name);
    // console.log('user_id:', user_id);
    console.log('languages:', languages);

    // const response = await fetch('/posts', {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ job_title, salary, url, message, company_name, user_id, languages })
    // });
  };

  const getLanguages = (e) => {
    e.preventDefault();
    
    const value = e.target.value;
    const isChecked = e.target.checked; // --> true or false
    console.log('isChecked:', isChecked);
    console.log('getLanguages synthetic event:', e.target.value);
    
    const copy = structuredClone(languages);

    if (isChecked) copy.add(value);
    else copy.delete(value);


    setLanguages(copy);
  };

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
              <FormLabel>Job Title</FormLabel>
              <Input ref={titleRef} placeholder='Job Title' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Company Name</FormLabel>
              <Input ref={companyRef} placeholder='Company' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Input ref={messageRef} placeholder='Message' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Salary</FormLabel>
              <Input ref={salaryRef} placeholder='Salary' />
            </FormControl>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Languages
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {/* <Checkbox onChange={getLanguages} value='1' size='sm' colorScheme='green'>
                    JavaScript
                  </Checkbox>
                  <Checkbox onChange={getLanguages} value='5' size='sm' colorScheme='green'>
                    Python
                  </Checkbox>
                  <Checkbox onChange={getLanguages} value='10' size='sm' colorScheme='green'>
                    Go
                  </Checkbox> */}
                  <Languages languages={languages} getLanguages={getLanguages}/>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {/* <Stack spacing={[1, 5]} direction={['column', 'row']}>
              <FormLabel>Languages</FormLabel>
              <Checkbox size='sm' colorScheme='green'>
                JavaScript
              </Checkbox>
              <Checkbox size='sm' colorScheme='green' >
                TypeScript
              </Checkbox>
              <Checkbox size='sm' colorScheme='green' >
                React
              </Checkbox>
            </Stack> */}
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleNewPost}>Post</Button>
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