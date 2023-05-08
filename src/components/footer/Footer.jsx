import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaBookOpen,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <span className="icon">
            {" "}
            <a href="https://github.com/YUVRAJSHARMA24">
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            {" "}
            <a href="https://portfolio-nine-iota-90.vercel.app/">
              {" "}
              <FaBookOpen />
            </a>
          </span>
          <span className="icon">
            <a href="https://twitter.com/iamuv_24">
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a href="http://www.linkedin.com/in/yuvraj-sharma-587a951bb">
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
