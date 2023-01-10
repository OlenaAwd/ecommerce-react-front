import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex h-[80vh] gap-[10px] m-[10px]">
      {/* col-1 */}
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="img"
            className="categoryImg"
          />
          <button className="categoryBtn">
            <Link to="/products/1">Sale</Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="img"
            className="categoryImg"
          />
          <button className="categoryBtn">
            <Link to="/products/1">Women</Link>
          </button>
        </div>
      </div>
      {/* col-2 */}
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="categoryImg"
          />
          <button className="categoryBtn">
            <Link to="/products/1">New Season</Link>
          </button>
        </div>
      </div>
      {/* col-3 */}
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
                className="categoryImg"
              />
              <button className="categoryBtn">
                <Link to="/products/1">Men</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="img"
                className="categoryImg"
              />
              <button className="categoryBtn">
                <Link to="/products/1">Accessories</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="img"
            className="categoryImg"
          />
          <button className="categoryBtn">
            <Link to="/products/1"> Shoes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
