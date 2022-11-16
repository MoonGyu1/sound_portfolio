import React from 'react';
import { useNavigate } from 'react-router-dom';
import './select_style.css';

const SelectUploadPage = (props) => {
  const navigate = useNavigate();
  const handleClick = async (e) => {
    navigate('/sound');
  };

  return (
    <div className="select-upload-container">
      <div className="select-upload-content">
        <h3 className="select-upload-title">
          업로드할 포트폴리오 유형을 선택해주세요.
        </h3>
        <div className="select-upload-button">
          <div>
            <button className="select-btn">이미지</button>
            <p className="btn-description">
              * 배우, 모델 등<br />
              이미지 강조형 포트폴리오
            </p>
          </div>
          <div>
            <button className="select-btn" onClick={handleClick}>
              사운드
            </button>
            <p className="btn-description">
              * 가수, 성우 등<br />
              사운드 강조형 포트폴리오
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectUploadPage;
