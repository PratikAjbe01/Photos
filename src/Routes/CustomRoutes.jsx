import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ImageList from '../ImageList/imageList';
import ImageDetails from '../ImageDetails/ImageDetails'; // Import the ImageDetails component

function CustomRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ImageList />} />
        <Route path="/photos/:id" element={<ImageDetails />} />
      </Routes>
    </div>
  );
}

export default CustomRoutes;
