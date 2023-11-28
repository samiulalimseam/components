import React, { useState } from 'react';

const ImageComponent = () => {
  const imageUrl = './shots/maxify-3'; // Replace with your image URL
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => {
        setIsLoaded(true);
    }, 2000);
  };

  return (
    <div>
      {isLoaded ? (
        <img
          src={imageUrl}
          alt="Image"
          style={{ display: 'block' }}
        />
      ) : (
        <div>Loading...</div>
      )}
      {!isLoaded && <img src={imageUrl} alt="Image" onLoad={handleImageLoad} style={{ display: 'none' }} />}
    </div>
  );
};

export default ImageComponent;
