import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from '../ImageCard/ImageCard';
import './ImageList.css';

function ImageList() {
  const [images, setImages] = useState([]);

  async function GetImages() {
    try {
      const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
      setImages(response.data.photos);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  useEffect(() => {
    GetImages();
  }, []);

  return (
    <div className='list'>
      {images.map((image, index) => (
        <ImageCard key={image.id} id={image.id} src={image.url} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default ImageList;
