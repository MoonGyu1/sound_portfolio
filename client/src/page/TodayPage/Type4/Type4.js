import React, { useEffect, useState } from 'react';
// import client from '../../axios';
import sample from '../asset/46_달.jpg';
import './style.css';

const Type4 = (portfolio) => {
  return (
    <div className="type4-container">
      <img className="thumbnail4" src={sample} alt="thumbnail" />
      <p className="title">{portfolio.title}</p>
    </div>
  );
};

export default Type4;
