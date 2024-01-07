
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import Stepper from './components/Stepper';
import ImageGenerator from './components/ImageGenerator';
import "./app.css"
function App() {
  const [divId, setdivId] = useState('');
  document.addEventListener('click',(e)=>{
    e.target.id = "generateimg"

  })

  return (
    <>
      <SimpleGrid  my={'4'} mx={'auto'} columns={2} spacing={10}>
        <Box id='123' display={'flex'} flexDirection={'column'} alignItems={'center'} >
          <h3>Custom Stepper component build using Chakra Ui</h3>
          <Stepper />
        </Box>
        <Flex justifyContent={'center'} alignItems={'center'} >
          <ImageGenerator btnText={'Save Screenshot of selected component'} id={"generateimg"} />
        </Flex>
      </SimpleGrid>
    </>
  )
}

export default App
