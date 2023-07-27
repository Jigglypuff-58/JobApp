import React from 'react';
import {
    chakra,
    Box,
    Flex,
    useCheckboxGroup,
    useCheckbox,
    Checkbox,
    Stack,
    Text
} from '@chakra-ui/react'

const Languages = ({ languages, getLanguages }) => {
  
    return (
        <>
          <Checkbox onChange={getLanguages} value='1' size='sm' colorScheme='green'>
                JavaScript
          </Checkbox>
          <Checkbox onChange={getLanguages} value='2' size='sm' colorScheme='green'>
                TypeScript
          </Checkbox>
          <Checkbox onChange={getLanguages} value='3' size='sm' colorScheme='green'>
                C#
          </Checkbox>
          <Checkbox onChange={getLanguages} value='4' size='sm' colorScheme='green'>
                C++
          </Checkbox>
          <Checkbox onChange={getLanguages} value='5' size='sm' colorScheme='green'>
                Python
          </Checkbox>
          <Checkbox onChange={getLanguages} value='6' size='sm' colorScheme='green'>
                Ruby
          </Checkbox>
          <Checkbox onChange={getLanguages} value='7' size='sm' colorScheme='green'>
                Java
          </Checkbox>
          <Checkbox onChange={getLanguages} value='8' size='sm' colorScheme='green'>
                PHP
          </Checkbox>
          <Checkbox onChange={getLanguages} value='9' size='sm' colorScheme='green'>
                .NET
          </Checkbox>
          <Checkbox onChange={getLanguages} value='10' size='sm' colorScheme='green'>
                Go
          </Checkbox>
          <Checkbox onChange={getLanguages} value='11' size='sm' colorScheme='green'>
                Swift
          </Checkbox>
          <Checkbox onChange={getLanguages} value='12' size='sm' colorScheme='green'>
                SQL
          </Checkbox>
          <Checkbox onChange={getLanguages} value='13' size='sm' colorScheme='green'>
                NoSQL
          </Checkbox>
          <Checkbox onChange={getLanguages} value='14' size='sm' colorScheme='green'>
                Rust
          </Checkbox>
          <Checkbox onChange={getLanguages} value='15' size='sm' colorScheme='green'>
                React
          </Checkbox>
          <Checkbox onChange={getLanguages} value='16' size='sm' colorScheme='green'>
                Redux
          </Checkbox>
          <Checkbox onChange={getLanguages} value='17' size='sm' colorScheme='green'>
                Node
          </Checkbox>
          <Checkbox onChange={getLanguages} value='18' size='sm' colorScheme='green'>
                Express
          </Checkbox>
          <Checkbox onChange={getLanguages} value='19' size='sm' colorScheme='green'>
                Vue
          </Checkbox>
          <Checkbox onChange={getLanguages} value='20' size='sm' colorScheme='green'>
                Angular
          </Checkbox>
          <Checkbox onChange={getLanguages} value='21' size='sm' colorScheme='green'>
                Svelte
          </Checkbox>
          <Checkbox onChange={getLanguages} value='22' size='sm' colorScheme='green'>
                Next.js
          </Checkbox>
          <Checkbox onChange={getLanguages} value='23' size='sm' colorScheme='green'>
                Nuxt.js
          </Checkbox>
          <Checkbox onChange={getLanguages} value='24' size='sm' colorScheme='green'>
                SvelteKit
          </Checkbox>
          <Checkbox onChange={getLanguages} value='25' size='sm' colorScheme='green'>
                OAuth
          </Checkbox>
          <Checkbox onChange={getLanguages} value='26' size='sm' colorScheme='green'>
                HTML
          </Checkbox>
          <Checkbox onChange={getLanguages} value='27' size='sm' colorScheme='green'>
                CSS
          </Checkbox>
        </>

    )
};

export default Languages;