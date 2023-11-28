
import { Button, Flex, Box, Textarea } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Stepper from './components/Stepper';
import { SimpleGrid } from '@chakra-ui/react'
import DnD from './components/DnD';
function App() {
  const [reviewText, setreviewText] = useState('');


  return (
    <>
      <SimpleGrid my={'4'} mx={'auto'} columns={2} spacing={10}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
          <h3>Custom Stepper component build using Chakra Ui</h3>
          <Stepper />
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
          <h3>Drag and drop component using react</h3>
          <DnD />
        </Box>
      </SimpleGrid>
    </>
  )
}

export default App
