import React from "react";

const Footer = () => {
  return (
    <div className="mt-[100px] mb-[20px] mx-[200px]">
      {/* top */}
      <div className="flex gap-[50px]">
        <div className="itemFooter">
          <h1 className="footerTitle">Categories</h1>
          <span className="span">Women</span>
          <span className="span">Men</span>
          <span className="span">Shoes</span>
          <span className="span">Accessories</span>
          <span className="span">New Arrivals</span>
        </div>
        <div className="itemFooter">
          <h1 className="footerTitle">Links</h1>
          <span className="span">FAQ</span>
          <span className="span">Pages</span>
          <span className="span">Stores</span>
          <span className="span">Compare</span>
          <span className="span">Cookies</span>
        </div>
        <div className="itemFooter">
          <h1 className="footerTitle">About</h1>
          <span className="span">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="itemFooter">
          <h1 className="footerTitle">Contact</h1>
          <span className="span">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      {/* bottom */}
      <div className="flex items-center justify-between mt-[50px]">
        {/* left */}
        <div className="flex items-center">
          <span className="text-[#2879fe] text-[24px] font-bold">
            Kempik&Co
          </span>
          <span className="ml-[20px] text-[12px] text-[#808080]">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        {/* right */}
        <div>
          <img src="/img/payment.png" alt="payment" className="h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
