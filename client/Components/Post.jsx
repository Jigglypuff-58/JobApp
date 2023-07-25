import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const Post = ({ postId, user_id, username, email, jobTitle, salary, url, message, company_name, languages }) => {
  return (
    <div className='post'>
      <Card maxW='sm' background='#1b1523' color='#fff'>

        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='lg'>Frontend Developer (jobTitle)</Heading>
            <Heading size='md'>Amazon (company_name)</Heading>
              <Text>
                Hey guys! Looks like Amazon is hiring right now for their front end team. (message)
              </Text>
              <Text color='green.200' fontSize='xl'>$130,000 (salary)</Text>
              <Heading size='sm'>Languages</Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.300' />
                  TypeScript
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.300' />
                  Node.js
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.300' />
                  Python
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color='green.300' />
                  SQL
                </ListItem>
              </List>
          </Stack>
        </CardBody>

        <Divider />

        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='teal'>Link (url)</Button>
          </ButtonGroup>
        </CardFooter>

      </Card>
    </div>
  );
};

export default Post;
