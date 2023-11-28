import {
    Step,
    Box,
    StepDescription,
    StepIcon,
    StepIndicator,
    ButtonGroup,
    StepNumber,
    Flex,
    Button,
    Text,
    Image as ChakraImage,
    Stack,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const steps = [
    { title: 'First', description: 'Open App' },
    { title: 'Second', description: 'Goto products and choose product for pre-order' },
    { title: 'Third', description: 'Click Add' },
    { title: 'Third', description: 'Go to settings and enable status' },
    { title: 'Third', description: 'Save Settings' },
    { title: 'First', description: 'Goto Online Store' },
    { title: 'Second', description: 'Click customise' },
    { title: 'Third', description: 'Click dropdown button' },
    { title: 'First', description: 'Select product' },
    { title: 'Second', description: 'Select Default Product' },
    { title: 'Third', description: 'Add block above the Button' },
    { title: 'Third', description: 'Select Pre Order block from Maxify pre-order' },
    { title: 'First', description: 'Visit selected product' },
    { title: 'Second', description: 'Click pre order button' },
    { title: 'Third', description: 'It will add the product to cart' },
]


const StepperComponent = () => {
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    })
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const activeStepText = steps[activeStep].description
    

    
    return (
        <Box gap={2}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box gap={2} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} borderRadius={'lg'} w={'auto'} >
                <Box  m={2} w={'full'} height={['225px', '335px', '390px']}>
                <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
                    <ChakraImage onLoad={console.log('image loaded')} border={'1px solid whitesmoke'} borderRadius={'lg'} w={['400px', '600px', '700px']} objectFit={'contain'} src={`/shots/maxify-${activeStep + 1}`}>

                    </ChakraImage>
                    </motion.div>
                </Box>
                <Stack w={'full'}>
                    <Stepper color={'#00B289'} colorScheme='teal' size='sm' index={activeStep} gap='0'>
                        {steps.map((step, index) => (
                            <Step key={index} gap='0'>
                                <StepIndicator >
                                    <StepStatus complete={<StepIcon />}

                                        active={<StepNumber />} />
                                </StepIndicator>
                                <StepSeparator _horizontal={{ ml: '0' }} />
                            </Step>
                        ))}
                    </Stepper>
                    <Text>
                        Step {activeStep + 1}: <b>{activeStepText}</b>
                    </Text>
                </Stack>
                <Flex gap={2}>
                    <ButtonGroup size={'sm'}  isAttached >
                        <Button colorScheme={'teal'} isDisabled={activeStep === 0} onClick={() => {
                            setActiveStep(activeStep - 1)
                            setCurrentImageIndex(activeStep)
                        }} >
                            Prev
                        </Button>
                        <Button colorScheme={'teal'} isDisabled={activeStep + 1 === steps.length} onClick={() => {
                            setActiveStep(activeStep + 1)
                            setCurrentImageIndex(activeStep)
                        }} >
                            Next
                        </Button>
                    </ButtonGroup>
                </Flex>
            </Box>
        </Box>
    )
}

export default StepperComponent