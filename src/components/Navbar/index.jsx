import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SlArrowDown } from 'react-icons/sl';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from '../Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector(state => state.cart.products);
  return (
    <div className="h-[80px]">
      <div className="py-[10px] px-[30px] flex justify-between items-center">
        {/* left */}
        <div className="flex items-center gap-[25px]">
          <div className="item">
            <img src="/img/en.png" alt="language" />
            <SlArrowDown />
          </div>
          <div className="item">
            <span>USD</span>
            <SlArrowDown />
          </div>
          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        {/* center */}
        <div className="flex text-[30px] tracking-[2px]">
          <Link to="/">Kempik&Co</Link>
        </div>
        {/* right */}
        <div className="flex items-center gap-[25px] ">
          <div className="item">
            <Link to="/">Home</Link>
          </div>
          <div className="item">
            <Link to="/">About</Link>
          </div>
          <div className="item">
            <Link to="/">Contacts</Link>
          </div>
          <div className="item">
            <Link to="/">Stores</Link>
          </div>
          <div className="flex gap-[15px] cursor-pointer">
            <IconContext.Provider value={{ className: 'icons' }}>
              <BiSearchAlt2 />
              <BsPerson />
              <AiOutlineHeart />
              <div className="relative" onClick={() => setOpen(!open)}>
                <AiOutlineShoppingCart />
                <span className="text-[12px] w-[20px] h-[20px] rounded-full bg-[#2879fe] text-white absolute right-[-12px] top-[-13px] flex items-center justify-center">
                  {products.length}
                </span>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
