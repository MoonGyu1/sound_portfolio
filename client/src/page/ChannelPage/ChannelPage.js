import React, { useEffect, useState } from 'react';
import client from '../../axios';
import follow from './asset/팔로우 버튼.png';
import chatting from './asset/프로필_채팅버튼.svg';
import share from './asset/프로필_공유버튼.svg';
import left from './asset/left.png';
import right from './asset/right.png';
import Type3 from '../TodayPage/Type3/Type3';
import Type6 from '../TodayPage/Type6/Type6';
import './style.css';

const ChannelPage = (props) => {
  const [Portfolio1, setPortfolio1] = useState();
  const [Portfolio2, setPortfolio2] = useState();
  const [Artist, setArtist] = useState();
  const [ToggleProfile, setToggleProfile] = useState('false');

  useEffect(() => {
    async function getPortfolio() {
      let response = await client.post(
        '/api/portfolio/id',
        [22, 23, 24, 25, 26, 27, 28, 29]
      );
      setPortfolio1(response.data.data);

      response = await client.post(
        '/api/portfolio/id',
        [30, 31, 32, 33, 34, 35]
      );
      setPortfolio2(response.data.data);
    }
    async function getArtist() {
      let response = await client.post('/api/user/id', [1]);
      setArtist(response.data.data[0]);
    }

    getPortfolio();
    getArtist();
  }, []);

  const handleClickProfile = () => {
    if (ToggleProfile === 'false') {
      setToggleProfile('true');
    } else {
      setToggleProfile('false');
    }
  };

  return (
    <div className="channel-page-container">
      <div
        className="channel-left"
        style={{
          backgroundImage: `${
            ToggleProfile === 'false'
              ? "url('images/1_background.jpg')"
              : 'none'
          }`,
          backgroundColor: `${ToggleProfile === 'false' ? '#d33535' : '#fff'}`,
          borderRight: `${ToggleProfile === 'false' ? 'none' : '1px solid'}`,
        }}
        onClick={handleClickProfile}
      >
        {ToggleProfile && ToggleProfile === 'false' ? (
          <div className="channel-left-content">
            <div className="profile">
              <img
                className="photo"
                src={Artist && `images/${Artist.photo}`}
                alt="user"
              />
              <p className="name">{Artist && Artist.username}</p>
              <p className="description">가수 · 배우</p>
            </div>
            <div className="profile-button">
              <img className="follow" src={follow} alt="follow" />
              <img className="chatting" src={chatting} alt="chatting" />
              <img className="share" src={share} alt="share" />
            </div>
          </div>
        ) : (
          <div className="channel-left-content, toggled">
            <p className="type-title-channel toggled">프로필</p>
            <div className="profile-num">
              {/* <img className="photo " src={sample} alt="user" /> */}
              <p className="num toggled">좋아요 {Artist && Artist.likeNum}</p>
              <p className="num toggled">
                팔로워 {Artist && Artist.followerNum}
              </p>
              <p className="num toggled">
                팔로잉 {Artist && Artist.followingNum}
              </p>
            </div>
            <div className="toggle-content">
              <p className="toggled-title">소개</p>
              <p className="toggled-description">{Artist && Artist.intro}</p>
            </div>
            <div className="toggle-content">
              <p className="toggled-title">위치</p>
              <p className="toggled-description">{Artist && Artist.location}</p>
            </div>
            <div className="toggle-content">
              <p className="toggled-title">학력</p>
              <p className="toggled-description">
                {Artist && Artist.education}
              </p>
            </div>
            <div className="toggle-content">
              <p className="toggled-title">소셜</p>
              <div style={{ display: 'flex' }}>
                <button className="toggled-description">instagram</button>
                <button className="toggled-description">melon</button>
              </div>
            </div>
            <div className="toggle-content">
              <p className="toggled-title">협업 후기</p>
              <div style={{ display: 'flex' }}>
                <img className="left" src={left} alt="left" />
                <p id="review" className="toggled-description">
                  공개되지 않은 후기입니다.
                </p>
                <img className="right" src={right} alt="right" />
              </div>
            </div>

            {/* <div>
              <p className="description, toggled">정보</p>
            </div> */}
            {/* <div className="profile-button">
              <img className="follow" src={follow} alt="follow" />
              <img className="chatting" src={chatting} alt="chatting" />
              <img className="share" src={share} alt="share" />
            </div> */}
          </div>
        )}
      </div>
      <div className="channel-right">
        <div className="type-container">
          <p className="type-title-channel">사운드 포트폴리오</p>
          <div className="type3">
            {Portfolio1 &&
              Portfolio1.map((a, i) => {
                return Type3(a);
              })}
          </div>
        </div>
        <div className="type-container">
          <p className="type-title-channel">이미지 포트폴리오</p>
          <div className="type6 channel">
            {Portfolio2 &&
              Portfolio2.map((a, i) => {
                return Type6(a);
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
