import React from 'react';
import './style.css';
import ft_logo from './asset/ft_logo.png';
import ft_instagram from './asset/ft_instagram.png';
import ft_blog from './asset/ft_blog.png';

const Footer = (props) => {
  return (
    <footer id="ft">
      <div className="ft-container">
        <img src={ft_logo} width="152" id="logo" alt="logo" />
        <div id="str1">이용약관</div>
        <div id="str2">개인정보처리방침</div>
        <div id="str3">제휴문의</div>
        <img src={ft_blog} width="40" className="img" alt="blog" />
        <img src={ft_instagram} width="29" className="img" alt="instagram" />
        <div id="str4">Copyright © VWX Co.,Ltd. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
