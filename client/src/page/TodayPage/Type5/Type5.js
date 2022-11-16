import React, { useEffect, useState } from 'react';
// import client from '../../axios';
import sample from '../asset/46_달.jpg';
import './style.css';

const Type5 = (artist) => {
  return (
    <div className="type5-container">
      <img className="thumbnail5" src={sample} alt="thumbnail" />
      <p className="title">{artist.username}</p>
    </div>
  );
};

export default Type5;
