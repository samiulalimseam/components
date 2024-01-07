import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import {Button, Flex} from "@chakra-ui/react"
const ImageGenerator = ({id, btnText}) => {
  const[imgFile, setImgFile] = useState(null)
  const saveDivAsImage = () => {
    const element = document.getElementById(id);

    if (!element) {
      console.error(`Element with ID yourDivId not found`);
      return;
    }

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      setImgFile(imgData)
      
    });
  };

  return (
    <Flex direction={'column'} gap={2}>
      {imgFile &&  <img src={imgFile} alt="" /> }
      <Button colorScheme='teal' onClick={saveDivAsImage}>{btnText}</Button>
    </Flex>
  );
};

export default ImageGenerator;
