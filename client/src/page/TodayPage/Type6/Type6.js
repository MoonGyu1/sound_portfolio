import React, { useEffect, useState } from 'react';
// import client from '../../axios';
import './style.css';

const Type6 = (portfolio) => {
  return (
    <div className="type6-container">
      <img
        className="thumbnail6"
        src={`images/${portfolio.image}`}
        alt="thumbnail"
      />
      <p className="title">{portfolio.title}</p>
    </div>
  );
};

export default Type6;
