import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      {item?.attributes.isNew && (
        <span className=" border border-sky-500  left-[5px] bg-white text-teal-700  px-[5px] z-5 font-semibold text-[12px] z-999">
          New Season
        </span>
      )}

      <div className="flex flex-col w-[280px] gap-[10px]">
        <div className="group relative w-full h-[400px] cursor-pointer">
          <img
            className="w-full h-full object-cover absolute visible group-hover:invisible mb-[50px]"
            src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}
            alt="main"
          />
          <img
            className="invisible group-hover:visible absolute w-full h-full object-cover "
            src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url}
            alt="second"
          />
        </div>
        <h2 className="text-[16px] font-normal">{item?.attributes.title}</h2>
        <div className="flex gap-[20px]">
          <h3 className="text-[18px] font-semibold text-gray-500 line-through">
            ${item.oldPrice || item?.attributes.price + 20}
          </h3>
          <h3 className="text-[18px] font-semibold">${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
