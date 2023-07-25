import React from 'react';
import { EditIcon, SunIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
const Feed = () => {
  function renderFeed() {}

  return (
    <div>
      <div className='nav'>
        <div className='home'>
          <Button leftIcon={<SunIcon />}></Button>
        </div>
        <div className='post'>
          <Button leftIcon={<EditIcon />}>Add Post</Button>
        </div>
      </div>

      <div>Feed</div>
    </div>
  );
};

export default Feed;
