import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../../axios';
import './style.css';
import login_logo from './asset/login_logo.png';

const LoginPage = (props) => {
  const navigate = useNavigate();
  const [serviceId, setServiceId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { serviceId, password };
    client
      .post('/api/user/signin', user)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data.data));
        localStorage.setItem('isLogin', JSON.stringify(true));
        navigate('/');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" noValidate onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h1 id="login">
            <img id="login-img" src={login_logo} width="312" alt="login-logo" />
            로그인
          </h1>
          <h3 className="Auth-form-title">탤런티드에 오신 것을 환영합니다.</h3>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="아이디를 입력하세요."
              onChange={({ target }) => setServiceId(target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="비밀번호를 입력하세요."
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              확인
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            비밀번호가 기억나지 않으세요?
            <a className="find-pw" href="#">
              비밀번호 찾기
            </a>{' '}
            /{' '}
            <a className="find-id" href="#">
              아이디 찾기
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
