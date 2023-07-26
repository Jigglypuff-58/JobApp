import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

const Post = ({
  company_name,
  job_title,
  lang_id,
  lang_name,
  languages,
  message,
  post_id,
  salary,
  url,
  user_id,
}) => {
  const listOfLanguages = [];

  for (const language of languages) {
    listOfLanguages.push(
      <ListItem>
        <ListIcon as={ChevronRightIcon} color='green.300' />
        {language}
      </ListItem>
    );
  }
  
  return (
    <div className='post'>
      <Card maxW='sm' background='#1b1523' color='#fff'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='lg'>{job_title}</Heading>
            <Heading size='md'>{company_name}</Heading>
            <Text>{message}</Text>
            <Text color='green.200' fontSize='xl'>
              ${salary.toLocaleString("en-US")}
            </Text>
            <Heading size='sm'>Languages</Heading>
            <List spacing={3}>{listOfLanguages}</List>
          </Stack>
        </CardBody>

        <Divider />

        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='teal'>
              <a href={url}>Link</a>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Post;
