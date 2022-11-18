import React, { useEffect, useState } from 'react';
// import client from '../../axios';
import sample from '../asset/46_달.jpg';
import like from './빈 하트.svg';
import likeFull from './빨간 하트.svg';
import playButton from './playButton.png';
import video from './video.png';
import './style.css';

const Type3 = (portfolio) => {
  // const [IsClicked, setIsClicked] = useState('false');

  // const onClick = () => {
  //   if (IsClicked === 'false') {
  //     setIsClicked('true');
  //   } else {
  //     setIsClicked('false');
  //   }
  // };
  return (
    <div className="type3-container">
      <div className="parent-img">
        <img className="sthumbnail" src={sample} alt="thumbnail" />
        <img className="play-button" src={playButton} alt="play-button" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '30px',
        }}
      >
        <p className="stitle">{portfolio.title}</p>
        <p className="sartist">{portfolio.artistName}</p>
      </div>
      {/* <img
        className="like"
        value={IsClicked}
        src={IsClicked === 'false' ? like : likeFull}
        onClick={onClick}
        alt="like"
      /> */}
      <div
        style={{
          display: 'flex',
          paddingRight: '15px',
          paddingTop: '35px',
          // paddingLeft: '500px',
        }}
      >
        <img className="like" src={like} alt="like" />
        <p className="like-num">{portfolio.likeNum}</p>
        <p className="play">{portfolio.playNum}회 재생</p>
        <img className="video" src={video} alt="video" />
      </div>
    </div>
  );
};

export default Type3;
