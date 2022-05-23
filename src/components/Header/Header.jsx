import React from "react";
import "./Header.scss";
import email from '../Images/email.svg';
import github from '../Images/github.svg';
import linkin from '../Images/linkin.svg'

const Header = () => {
  return (
    <div className="fixed-header">
      <div className="container">
        <div>
          <h1>Ash</h1>
        </div>
        <div>
          <a href="#">
            <img src={email} alt="" />
          </a>
          <a href="#">
            <img src={github} alt="" />
          </a>
          <a href="#">
            <img src={linkin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
