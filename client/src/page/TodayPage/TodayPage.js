import React, { useEffect, useState } from 'react';
import client from '../../axios';
import Carousel from 'react-bootstrap/Carousel';
import sample from './asset/46_달.jpg';
import banner from './asset/banner.jpg';
import './style.css';
import Type1 from './Type1/Type1';
import Type2 from './Type2/Type2';
import Type3 from './Type3/Type3';
import Type4 from './Type4/Type4';
import Type5 from './Type5/Type5';
import Type6 from './Type6/Type6';

const TodayPage = (props) => {
  const [Portfolio, setPortfolio] = useState();
  const [Artist, setArtist] = useState();

  useEffect(() => {
    async function getPortfolio() {
      const response = await client.get('/api/portfolio');
      setPortfolio(response.data.data);
    }
    async function getArtist() {
      const response = await client.get('/api/user');
      setArtist(response.data.data);
    }

    getPortfolio();
    getArtist();
  }, []);

  return (
    <div className="page-container">
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={banner} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={banner} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ display: 'inline-block' }}>
        <div style={{ display: 'inline-flex' }}>
          <div className="type-container">
            <p className="type-title">좋아할만한 포트폴리오</p>
            <div className="type1">
              {Portfolio &&
                Portfolio.map((p, i) => {
                  while (i < 4) {
                    return Type1(p);
                  }
                })}
            </div>
          </div>
          <div className="type-container">
            <p className="type-title">이 아티스트 어때요?</p>
            <div className="type2">
              {Artist &&
                Artist.map((a, i) => {
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
            {Portfolio &&
              Portfolio.map((a, i) => {
                while (i < 4) {
                  return Type3(a);
                }
              })}
          </div>
        </div>
        <div className="type-container">
          <p className="type-title">귀여운 목소리 찾으세요?</p>
          <div className="type4">
            {Portfolio &&
              Portfolio.map((a, i) => {
                while (i < 4) {
                  return Type4(a);
                }
              })}
          </div>
        </div>
        <div className="type-container">
          <p className="type-title">{`<쇼미더머니>에 나온 아티스트를 만나보세요`}</p>
          <div className="type5">
            {Artist &&
              Artist.map((a, i) => {
                while (i < 5) {
                  return Type5(a);
                }
              })}
          </div>
        </div>
        <div className="type-container">
          <p className="type-title">NEW! 최신 포트폴리오</p>
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
          <p className="type-title">
            000님이 좋아하실만한 포트폴리오 모아봤어요!
          </p>
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
          <p className="type-title">경력 10년 이상! 베테랑 아티스트</p>
          <div className="type5">
            {Artist &&
              Artist.map((a, i) => {
                while (i < 5) {
                  return Type5(a);
                }
              })}
          </div>
        </div>
        <div className="type-container">
          <p className="type-title">악세사리 모델 찾으세요?</p>
          <div className="type6">
            {Portfolio &&
              Portfolio.map((a, i) => {
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
