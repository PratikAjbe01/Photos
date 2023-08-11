import React from 'react';
import './Image.css';
import { Link } from 'react-router-dom';

function ImageCard({ src, id }) {
  return (
    <div className='card'>
      <Link to={`/photos/${id}`}>
        <div><h1>{id}</h1></div>
        <div><img src={src} alt={`Image ${id}`} /></div>
      </Link>
    </div>
  );
}

export default ImageCard;
