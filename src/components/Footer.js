import React from 'react';
import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-primary p-4">
      <div className="container text-white text-center mb-5">
        <ul class="list-inline  text-center">
          <li class="list-inline-item fa-2x"><a href="https://github.com/eamahma"><FaGithub /></a></li>
          <li class="list-inline-item fa-2x"><a href="https://www.linkedin.com/in/amir-ahmadi-858110190/"><FaLinkedin /></a></li>
          <li class="list-inline-item fa-5x"><a href="https://twitter.com/aammiirr"><FaTwitter /></a></li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
