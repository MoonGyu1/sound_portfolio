import React, { useEffect, useState } from 'react';
// import client from '../../axios';
import sample from '../asset/46_달.jpg';
import like from './빈 하트.svg';
import likeFull from './빨간 하트.svg';
import playButton from './playButton.png';
import video from './video.png';
import './style.css';
import Thumbnail from '../../../component/Thumbnail/Thumbnail';

const Type3 = (portfolio) => {
  // const [ToggleLike, setToggleLike] = useState('false');

  const handleClickLike = (e) => {
    if (
      e.target.src ===
      'http://localhost:3000/images/%EB%B9%88%20%ED%95%98%ED%8A%B8.svg'
    ) {
      e.target.src = 'images/빨간 하트.svg';
    } else {
      e.target.src = 'images/빈 하트.svg';
    }
    // console.log(e.target.src == 'images/빨간 하트.svg');
    // console.log(e.target.src);
    // e.target.src = 'images/빨간 하트.svg';
    // console.log(LikeRef);
    // if (ToggleLike === 'false') {
    //   setToggleLike('true');
    // } else {
    //   setToggleLike('false');
    // }
  };

  return (
    <div className="type3-container">
      <div className="parent-img">
        <Thumbnail
          imgUrl={`images/${portfolio.image}`}
          className="sthumbnail"
          startm={portfolio.musicStartM}
          starts={portfolio.MusicStartS}
          url={portfolio.musicLink}
        />
        {/* <img className="play-button" src={playButton} alt="play-button" /> */}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '30px',
          minWidth: '200px',
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
        <img
          className="like"
          src={'images/빈 하트.svg'}
          alt="like"
          onClick={handleClickLike}
        />
        <p className="like-num">{portfolio.likeNum}</p>
        <p className="play">{portfolio.playNum}회 재생</p>
        <img className="video" src={video} alt="video" />
      </div>
    </div>
  );
};

export default Type3;
