import React, { useEffect, useState } from 'react';
import client from '../../axios';
import sample from './asset/46_달.jpg';
import follow from './asset/팔로우 버튼.png';
import chatting from './asset/프로필_채팅버튼.svg';
import share from './asset/프로필_공유버튼.svg';
import Type3 from '../TodayPage/Type3/Type3';
import Type6 from '../TodayPage/Type6/Type6';
import './style.css';

const ChannelPage = (props) => {
  const [Portfolio, setPortfolio] = useState();
  const [Artist, setArtist] = useState();

  useEffect(() => {
    async function getPortfolio() {
      const response = await client.get('/api/portfolio');
      setPortfolio(response.data.data);
    }
    async function getArtist() {
      const response = await client.get('/api/user');
      setArtist(response.data.data[0]);
    }

    getPortfolio();
    getArtist();
  }, []);

  return (
    <div className="channel-page-container">
      <div className="channel-left">
        <div className="channel-left-content">
          <div className="profile">
            <img className="photo" src={sample} alt="user" />
            <p className="name">{Artist && Artist.username}</p>
            <p className="description">정보</p>
          </div>
          <div className="profile-button">
            <img className="follow" src={follow} alt="follow" />
            <img className="chatting" src={chatting} alt="chatting" />
            <img className="share" src={share} alt="share" />
          </div>
        </div>
      </div>

      <div className="channel-right">
        <div className="type-container">
          <p className="type-title-channel">사운드 포트폴리오</p>
          <div className="type3">
            {Portfolio &&
              Portfolio.map((a, i) => {
                while (i < 4) {
                  return Type3(a);
                }
              })}
          </div>
        </div>
        <div className="type-container">
          <p className="type-title-channel">이미지 포트폴리오</p>
          <div className="type6 channel">
            {Portfolio &&
              Portfolio.map((a, i) => {
                while (i < 4) {
                  return Type6(a);
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
