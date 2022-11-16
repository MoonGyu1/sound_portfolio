import React, { useEffect, useState } from 'react';
// import client from '../../axios';
import sample from '../asset/46_달.jpg';
import './style.css';

const Type2 = (artist) => {
  return (
    <div className="type2-container">
      <img className="thumbnail" src={sample} alt="thumbnail" />
      <p className="title">{artist.username}</p>
    </div>
  );
};

export default Type2;
