import React from 'react';
import { Navigate } from 'react-router-dom';

// restricted = null (누구나 접근 가능)
// restricted = true (로그인 한 유저만 접근 가능)
// restricted = false (로그인 안 한 유저만 접근 가능)

const Auth = ({ children, restricted }) => {
  const isLogin = JSON.parse(localStorage.getItem('isLogin'));
  // 로그인 O
  if (isLogin === true) {
    if (restricted !== false) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  }
  // 로그인 X
  else if (isLogin === false || isLogin === null) {
    if (restricted !== true) {
      return children;
    } else {
      return <Navigate to="/signin" />;
    }
  }
};

export default Auth;
