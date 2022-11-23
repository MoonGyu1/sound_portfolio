import React, { useState, useRef } from 'react';
import { Button, Form, Dropdown, Badge } from 'react-bootstrap';
import client from '../../axios';
import fileUploadButton from './asset/file-upload-button.svg';
import './upload_style.css';
import { toString } from '../../convertArrayToString';
// import fs from 'fs';

const SoundUploadPage = (props) => {
  const [Title, setTitle] = useState(''); // 포트폴리오 제목
  const [value, setValue] = useState('1'); // 음원 유형
  const [ThumbnailImage, setThumbnailImage] = useState('파일 이름'); // MP3 파일 이름
  const [SoundcloundLink, setSoundcloundLink] = useState(''); // 사운드클라우드 링크
  const [StartPoint, setStartPoint] = useState(''); // 재생 시작 지점
  const [Intro, setIntro] = useState(''); // 한 줄 소개
  const [ArtistName, setArtistName] = useState(''); // 아티스트명
  const [MusicvideoLink, setMusicvideoLink] = useState(''); // 뮤직비디오 링크
  const [Category, setCategory] = useState([]); // 카테고리
  const [FixedTag, setFixedTag] = useState([]); // 지정 태그
  const [CustomTag, setCustomTag] = useState([]); // 커스텀 태그
  const fileInput = useRef(null);

  const categoryList = {
    1: '가수',
    2: '성우',
    3: '음원 프로듀서',
    4: '아나운서',
    5: '기타',
  };

  const fixedTagList = {
    1: [
      '클래식',
      '재즈',
      '힙합',
      '팝',
      '발라드',
      '댄스',
      '락',
      'K-POP',
      '트로트',
      'R&B',
      '뮤직 비디오',
      '연극',
      '뮤지컬',
      '랩',
      '보컬',
    ],
    2: [
      '크리에이터',
      '멜로',
      '코미디',
      '로맨틱 코미디',
      '액션',
      '서부극',
      '갱스터',
      '누와르',
      '스릴러',
      '미스터리',
      '모험',
      '공포',
      '전쟁',
      '공상과학',
      '판타지',
      '애니메이션',
      '다큐멘터리',
      '게임',
      '드라마',
      '라디오',
    ],
    3: [
      '클래식',
      '재즈',
      '힙합',
      '팝',
      '발라드',
      '댄스',
      '락',
      'K-POP',
      '트로트',
      'R&B',
    ],
    4: ['MC', '뉴스', '음악방송', '해설', '나레이션', '다큐멘터리', '기상방송'],
  };

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const handleChange = (e) => {
    setThumbnailImage(e.target.files[0].name);
    // console.log(ThumbnailImage);
    // fs.writeFileSync('filename', e.target.files[0]);
  };

  const handleCategorySelect = (eventKey) => {
    if (Category.includes(Number(eventKey))) return; // 이미 해당 카테고리를 선택한 경우
    if (Category.length === 0) {
      setCategory([Number(eventKey)]);
    } else {
      setCategory([...Category, Number(eventKey)]);
    }
  };

  const handleCategoryDeleteButtonClick = (e) => {
    const value = Number(e.target.value);
    const index = Category.indexOf(value);
    Category.splice(index, 1);
    setCategory([...Category]);

    // 삭제하는 카테고리 관련 태그 삭제
    for (let i = 0; i < Object.keys(fixedTagList[`${value}`]).length; i++) {
      if (FixedTag.includes(fixedTagList[`${value}`][i])) {
        const tagIndex = FixedTag.indexOf(fixedTagList[`${value}`][i]);
        FixedTag.splice(tagIndex, 1);
        setFixedTag([...FixedTag]);
      }
    }
  };

  const handleTagButtonClick = (e) => {
    e.preventDefault();
    // 이미 선택된 경우 삭제
    if (FixedTag.includes(e.target.value)) {
      const index = FixedTag.indexOf(Number(e.target.value));
      FixedTag.splice(index, 1);
      setFixedTag([...FixedTag]);
    }
    // 선택 안 된 경우 추가
    else {
      if (FixedTag.length === 0) {
        setFixedTag([e.target.value]);
      } else {
        setFixedTag([...FixedTag, e.target.value]);
      }
    }
  };

  const handleKeyDown = (e) => {
    const value = e.target.value;
    if (e.key === 'Enter') {
      if (CustomTag.includes(value)) return; // 이미 해당 태그가 있는 경우
      if (CustomTag.length === 0) {
        setCustomTag([value]);
      } else {
        setCustomTag([...CustomTag, value]);
      }
      e.target.value = '';
    }
  };

  const handleCustomTagDeleteButtonClick = (e) => {
    const value = Number(e.target.value);
    const index = CustomTag.indexOf(value);
    CustomTag.splice(index, 1);
    setCustomTag([...CustomTag]);
  };

  const handleClickSubmit = async (e) => {
    alert('포트폴리오가 저장되었습니다.');
    window.location = '/channel';
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append('file', ThumbnailImage);
    // let userId = JSON.parse(localStorage.getItem('user')).id;
    // let StartM=StartPoint.split('분')[0];
    // let StartS=StartPoint.split('분')[1].split('초')[0];
    // let params = {
    //   userId,
    //   Title,
    //   value,
    //   SoundcloundLink,
    //   StartM,
    //   StartS,
    //   Intro,
    //   ArtistName,
    //   MusicvideoLink,
    //   toString(Category),
    //   toString(FixedTag),
    //   toString(CustomTag)
    // };
    // console.log('params:', params);
    // await client
    //   .post('/api/portfolio/sound/upload', params)
    //   .then((res) => {
    //     console.log('success');
    //     // localStorage.setItem('user', JSON.stringify(res.data.data));
    //     // localStorage.setItem('isLogin', JSON.stringify(true));
    //     // navigate('/');
    //   })
    //   .catch((err) => {
    //     alert(err.response.data.message);
    //   });
    // await client
    //   .post('/api/portfolio/sound/upload/image', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then((res) => {
    //     // localStorage.setItem('user', JSON.stringify(res.data.data));
    //     // localStorage.setItem('isLogin', JSON.stringify(true));
    //     // navigate('/');
    //   })
    //   .catch((err) => {
    //     alert(err.response.data.message);
    //   });
    // console.log(e.target.files[0]);
  };
  // console.log(
  //   Title,
  //   value,
  //   SoundcloundLink,
  //   StartPoint,
  //   ThumbnailImage,
  //   Intro,
  //   ArtistName,
  //   MusicvideoLink,
  //   Category,
  //   FixedTag,
  //   CustomTag
  // );

  return (
    <div className="sound-upload-container">
      <div className="music-info-container">
        <h3 className="music-info-title">음원 정보</h3>
        <div className="music-info-content">
          <Form>
            {/* 제목 */}
            <Form.Group className="mb-3">
              <Form.Label>제목 *</Form.Label>
              <Form.Control
                type="text"
                placeholder="포트폴리오 제목을 입력하세요."
                value={Title}
                onChange={({ target }) => setTitle(target.value)}
              />
            </Form.Group>
            {/* 음원 유형 선택 */}
            <div
              value={value}
              key="inline-radio"
              className="mb-3 type"
              onChange={({ target }) => setValue(target.value)}
            >
              <Form.Check
                inline
                label="사운드 클라우드"
                name="group1"
                value="1"
                checked={value === '1'}
                type="radio"
                id="inline-radio-1"
              />
              <Form.Check
                inline
                label="MP3 파일 업로드"
                name="group1"
                value="2"
                checked={value === '2'}
                type="radio"
                id="inline-radio-2"
              />
            </div>
            {/* 1: 사운드클라우드, 2: MP3파일 */}
            {value === '1' ? (
              <div className="music-type-container">
                <Form.Group className="mb-3 soundcloud link">
                  <Form.Label className="soundcloud">링크 *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="https://soundcloud.com/"
                    value={SoundcloundLink}
                    onChange={({ target }) => setSoundcloundLink(target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 soundcloud start">
                  <Form.Label className="soundcloud">재생 시작 지점</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="00분 00초"
                    value={StartPoint}
                    onChange={({ target }) => setStartPoint(target.value)}
                  />
                </Form.Group>
              </div>
            ) : (
              <div className="music-type-container">
                <Form.Group className="mb-3 soundcloud link">
                  <Form.Label className="soundcloud">
                    MP3 파일 업로드 *
                  </Form.Label>
                  <Form.Control type="text" placeholder="파일 링크" />
                </Form.Group>
                <Form.Group className="mb-3 soundcloud start">
                  <Form.Label className="soundcloud">재생 시작 지점</Form.Label>
                  <Form.Control type="text" placeholder="00분 00초" />
                </Form.Group>
              </div>
            )}
            {/* 썸네일 이미지 */}
            <Form.Group controlId="formFile" className="mb-3 image">
              <Form.Label>
                썸네일 이미지 *
                <img
                  style={{
                    width: '30px',
                    cursor: 'pointer',
                    paddingLeft: '5px',
                  }}
                  src={fileUploadButton}
                  alt="upload-file-button"
                  onClick={handleButtonClick}
                />
              </Form.Label>
              <input
                type="file"
                accept="image/*"
                ref={fileInput}
                style={{ display: 'none' }}
                onChange={handleChange}
              />
              <Form.Control disabled type="text" placeholder={ThumbnailImage} />
            </Form.Group>
            {/* 포트폴리오 한 줄 소개 */}
            <Form.Group className="mb-3">
              <Form.Label>포트폴리오 한 줄 소개 *</Form.Label>
              <Form.Control
                type="text"
                placeholder="포트폴리오 한 줄 소개를 입력하세요."
                value={Intro}
                onChange={({ target }) => setIntro(target.value)}
              />
            </Form.Group>
            {/* 아티스트명 */}
            <Form.Group className="mb-3">
              <Form.Label>아티스트명 *</Form.Label>
              <Form.Control
                type="text"
                placeholder="아티스트명을 입력하세요."
                value={ArtistName}
                onChange={({ target }) => setArtistName(target.value)}
              />
            </Form.Group>
            {/* 뮤직비디오 링크 */}
            <Form.Group className="mb-3">
              <Form.Label>뮤직비디오 링크</Form.Label>
              <Form.Control
                type="text"
                placeholder="뮤직비디오 링크를 입력하세요."
                value={MusicvideoLink}
                onChange={({ target }) => setMusicvideoLink(target.value)}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="category-container">
        <div className="content-description">
          <h3 className="category-title">카테고리</h3>
          <div className="category-description">
            * 최대 5개까지 선택가능합니다.
          </div>
        </div>
        <div className="category-content">
          <div className="category-dropdown">
            <Dropdown
              className="d-inline mx-2"
              value={Category}
              onSelect={handleCategorySelect}
              onMouseDown={(e) => e.preventDefault()}
            >
              <Dropdown.Toggle id="dropdown-autoclose-true">
                가수
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey={1}>가수</Dropdown.Item>
                <Dropdown.Item eventKey={2}>성우</Dropdown.Item>
                <Dropdown.Item eventKey={3}>음원 프로듀서</Dropdown.Item>
                <Dropdown.Item eventKey={4}>아나운서</Dropdown.Item>
                <Dropdown.Item eventKey={5}>기타</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="selected-category">
            {Category.length !== 0 &&
              Category.map((c) => (
                <Badge pill bg="danger">
                  {categoryList[`${c}`]}
                  <button
                    value={c}
                    className="tag-delete-button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => handleCategoryDeleteButtonClick(e)}
                  >
                    x
                  </button>
                </Badge>
              ))}
          </div>
        </div>
      </div>
      {Category.length !== 0 && (
        <div className="tag-container">
          <div className="content-description">
            <h3 className="tag-title">태그</h3>
            <div className="tag-description">
              * 최대 10개까지 선택가능합니다.
            </div>
          </div>
          <div className="tag-content">
            {!(Category.length === 1 && Category.includes(5)) && (
              <div className="fixed-tag">
                <h3 className="fixed-tag-title">지정 태그</h3>
                <div style={{ display: 'block', paddingLeft: '17px' }}>
                  {Category.map((c) => {
                    return (
                      fixedTagList[`${c}`] &&
                      fixedTagList[`${c}`].map((v) => (
                        <Button
                          className={
                            FixedTag.includes(v)
                              ? 'tag-button-selected'
                              : 'tag-button-not-selected'
                          }
                          value={v}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={(e) => handleTagButtonClick(e)}
                        >
                          {v}
                        </Button>
                      ))
                    );
                  })}
                </div>
              </div>
            )}
            <div className="custom-tag">
              <h3 className="custom-tag-title">
                태그를 추가해보세요.
                <div style={{ paddingLeft: '20px' }}>
                  <input
                    type="text"
                    placeholder="음원, 작곡, 편곡..."
                    onKeyDown={handleKeyDown}
                  ></input>
                </div>
              </h3>
              <div
                style={{ display: 'block', paddingLeft: '17px' }}
                className="selected-tag"
              >
                {CustomTag.length !== 0 &&
                  CustomTag.map((c) => (
                    <Badge pill bg="danger">
                      {c}
                      <button
                        value={c}
                        className="tag-delete-button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={(e) => handleCustomTagDeleteButtonClick(e)}
                      >
                        x
                      </button>
                    </Badge>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="submit-button">
        <Button
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleClickSubmit}
        >
          저장하기
        </Button>
      </div>
    </div>
  );
};

export default SoundUploadPage;
