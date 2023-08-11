import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ImageDetails.css';
function ImageDetails() {
  const { id } = useParams();
  const [image, setImage] = useState({});

  async function downloadImage() {
    try {
      const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
      setImage({
        url: response.data.photo.url,
        description: response.data.photo.description,
        title: response.data.photo.title,
      });
    } catch (error) {
      console.error("Error fetching image details:", error);
    }
  }

  useEffect(() => {
    downloadImage();
  }, [id]);

  return (
    <div>
      <Link to="/">Home</Link>
      <div className="imagetypes">
        <img src={image.url} alt={image.title} />
       <div className='content'>
       <h2>{image.title}</h2>
        <h3>{image.description}</h3>
       </div>
      </div>
    </div>
  );
}

export default ImageDetails;
