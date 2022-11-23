import React, { useEffect, useState } from 'react';
// import client from '../../axios';
import './style.css';

const Type2 = (artist) => {
  return (
    <div className="type2-container">
      <div>
        <img
          className="thumbnail"
          src={`images/${artist.photo}`}
          alt="thumbnail"
        />
      </div>
      <p className="title">{artist.username}</p>
    </div>
  );
};

export default Type2;
