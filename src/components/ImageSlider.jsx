import { useState } from 'react';
import { Box, Image, Button } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = () => {
  const images = [
        './shots/maxify-1',
        './shots/maxify-2',
        './shots/maxify-3',
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <Box textAlign="center">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
        </motion.div>
      </AnimatePresence>
      <Button onClick={goToPrevious} mt={4} mr={2}>
        Previous
      </Button>
      <Button onClick={goToNext} mt={4}>
        Next
      </Button>
    </Box>
  );
};

export default ImageSlider;
