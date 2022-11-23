import React, { useEffect, useState } from 'react';
// import client from '../../axios';
import './style.css';

const Type5 = (artist) => {
  return (
    <div className="type5-container">
      <img
        className="thumbnail5"
        src={`images/${artist.photo}`}
        alt="thumbnail"
      />
      <p className="title">{artist.username}</p>
    </div>
  );
};

export default Type5;
