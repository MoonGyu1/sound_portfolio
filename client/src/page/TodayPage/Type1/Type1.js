import React from 'react';
import './style.css';

const Type1 = (portfolio) => {
  return (
    <div className="type1-container">
      <img
        className="thumbnail"
        src={`images/${portfolio.image}`}
        alt="thumbnail"
      />
      <p className="title">{portfolio.title}</p>
    </div>
  );
};

export default Type1;
