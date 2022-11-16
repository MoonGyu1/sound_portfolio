import React, { useEffect, useState } from 'react';
// import client from '../../axios';
import sample from '../asset/46_달.jpg';
import './style.css';

const Type1 = (portfolio) => {
  return (
    <div className="type1-container">
      <img className="thumbnail" src={sample} alt="thumbnail" />
      <p className="title">{portfolio.title}</p>
    </div>
  );
};

export default Type1;
