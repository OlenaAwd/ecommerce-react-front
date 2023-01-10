import React from 'react';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoGoogle,
  IoLogoPinterest,
} from 'react-icons/io';

const Contact = () => {
  return (
    <div className="bg-[#2879fe] text-white p-[15px] flex justify-center">
      <div className="w-[50%] flex items-center justify-between">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." className="input" />
          <button className="joinBtn">JOIN US</button>
        </div>
        <div className="iconsContact">
          <IoLogoFacebook />
          <IoLogoInstagram />
          <IoLogoTwitter />
          <IoLogoGoogle />
          <IoLogoPinterest />
        </div>
      </div>
    </div>
  );
};

export default Contact;
