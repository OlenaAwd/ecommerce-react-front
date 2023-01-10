import React, { useState } from 'react';
import { MdAddShoppingCart, MdOutlineFavoriteBorder } from 'react-icons/md';
import { GiScales } from 'react-icons/gi';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartReducer';

const Product = () => {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="py-[20px] px-[50px] flex gap-[50px]">
      {loading ? (
        'Loading ...'
      ) : (
        <>
          <div className="leftProd">
            <div className="imagesProduct">
              <img
                className="imgProduct"
                src={
                  process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={e => setSelectedImg('img')}
              />
              <img
                className="imgProduct"
                src={
                  process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={e => setSelectedImg('img2')}
              />
            </div>
            <div className="mainImgContainer">
              <img
                className="mainImg"
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg].data?.attributes?.url
                }
                alt="mainImg"
              />
            </div>
          </div>
          <div className="rightProd">
            <h1>{data?.attributes?.title}</h1>
            <span className="text-[30px] text-[#2879fe] font-semibold">
              ${data?.attributes?.price}
            </span>
            <p className="text-[18px] font-light text-justify">{data?.attributes?.desc}</p>
            <div className="text-[18px] gap-[10px] items-center flex">
              <button
                className="flex w-[50px] h-[50px] items-center justify-center cursor-pointer border-none"
                onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}
              >
                -
              </button>
              {quantity}
              <button
                className="flex w-[50px] h-[50px] items-center justify-center cursor-pointer border-none"
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data?.attributes?.img?.data?.attributes?.url,
                    quantity,
                  })
                )
              }
            >
              <MdAddShoppingCart /> ADD TO CART
            </button>
            <div className="flex gap-[20px]">
              <div className="itemProductBtn">
                <MdOutlineFavoriteBorder /> ADD TO WISH LIST
              </div>
              <div className="itemProductBtn">
                <GiScales /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr className="border-[1px] border-[rgb(238, 237, 237)] w-full" />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
