import React, { useEffect, useState } from 'react';
import client from '../../axios';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import Type1 from './Type1/Type1';
import Type2 from './Type2/Type2';
import Type3 from './Type3/Type3';
import Type4 from './Type4/Type4';
import Type5 from './Type5/Type5';
import Type6 from './Type6/Type6';

const TodayPage = (props) => {
  const [Portfolio1, setPortfolio1] = useState();
  const [Portfolio2, setPortfolio2] = useState();
  const [Portfolio3, setPortfolio3] = useState();
  const [Portfolio4, setPortfolio4] = useState();
  const [Portfolio5, setPortfolio5] = useState();
  const [Artist1, setArtist1] = useState();
  const [Artist2, setArtist2] = useState();
  const [Artist3, setArtist3] = useState();

  useEffect(() => {
    async function getPortfolioById() {
      let response = await client.post('/api/portfolio/id', [1, 2, 3, 4]);
      setPortfolio1(response.data.data);

      response = await client.post('/api/portfolio/id', [5, 6, 7, 8]);
      setPortfolio2(response.data.data);

      response = await client.post('/api/portfolio/id', [9, 10, 11, 12]);
      setPortfolio3(response.data.data);

      response = await client.post('/api/portfolio/id', [13, 14, 15, 16]);
      setPortfolio4(response.data.data);

      response = await client.post('/api/portfolio/id', [17, 18, 19, 20, 21]);
      setPortfolio5(response.data.data);
    }
    async function getArtistById() {
      let response = await client.post('/api/user/id', [2, 3, 4, 5]);
      setArtist1(response.data.data);

      response = await client.post('/api/user/id', [6, 7, 8, 9, 10]);
      setArtist2(response.data.data);

      response = await client.post('/api/user/id', [11, 12, 13, 14, 15]);
      setArtist3(response.data.data);
    }

    getPortfolioById();
    getArtistById();
  }, []);

  return (
    <div className="page-container">
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={'images/banner1.webp'}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={'images/banner2.webp'}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={'images/banner3.webp'}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ display: 'inline-block', marginTop: '70px' }}>
        <div style={{ display: 'inline-flex' }}>
          <div className="type-container">
            <p className="type-title">좋아할만한 포트폴리오</p>
            <div className="type1">
              {Portfolio1 &&
                Portfolio1.map((p, i) => {
                  while (i < 4) {
                    return Type1(p);
                  }
                })}
            </div>
          </div>
          <div className="type-container">
            <p className="type-title">이 아티스트 어때요?</p>
            <div className="type2">
              {Artist1 &&
                Artist1.map((a, i) => {
                  while (i < 4) {
                    return Type2(a);
                  }
                })}
            </div>
          </div>
        </div>
        <div className="type-container">
          <p className="type-title">그때 그 드라마 OST 목소리의 주인공!</p>
          <div className="type3">
            {Portfolio2 &&
              Portfolio2.map((a, i) => {
                while (i < 4) {
                  return Type3(a);
                }
              })}
          </div>
        </div>
        <div className="type-container">
          <p className="type-title">귀여운 목소리 찾으세요?</p>
          <div className="type4">
            {Portfolio3 &&
              Portfolio3.map((a, i) => {
                while (i < 4) {
                  return Type4(a);
                }
              })}
          </div>
        </div>
        <div className="type-container">
          <p className="type-title">{`<쇼미더머니>에 나온 아티스트를 만나보세요`}</p>
          <div className="type5">
            {Artist2 &&
              Artist2.map((a, i) => {
                while (i < 5) {
                  return Type5(a);
                }
              })}
          </div>
        </div>
        <div className="type-container">
          <p className="type-title">NEW! 최신 포트폴리오</p>
          <div className="type3">
            {Portfolio4 &&
              Portfolio4.map((a, i) => {
                while (i < 4) {
                  return Type3(a);
                }
              })}
          </div>
        </div>

        <div className="type-container">
          <p className="type-title">
            000님이 좋아하실만한 포트폴리오 모아봤어요!
          </p>
          <div className="type3">
            {Portfolio1 &&
              Portfolio1.map((a, i) => {
                while (i < 4) {
                  return Type3(a);
                }
              })}
          </div>
        </div>
        <div className="type-container">
          <p className="type-title">경력 10년 이상! 베테랑 아티스트</p>
          <div className="type5">
            {Artist3 &&
              Artist3.map((a, i) => {
                while (i < 5) {
                  return Type5(a);
                }
              })}
          </div>
        </div>
        <div className="type-container">
          <p className="type-title">악세사리 모델 찾으세요?</p>
          <div className="type6">
            {Portfolio5 &&
              Portfolio5.map((a, i) => {
                while (i < 5) {
                  return Type6(a);
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayPage;
