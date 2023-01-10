import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [val, setValue] = useState(0);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = e => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value)
    );
  };

  const handleClear = () => {
    setMaxPrice(1000);
    setValue(0);
  };

  const handleChangePrice = e => {
    setMaxPrice(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="products">
      <div className="leftProducts">
        <div className="filterItem">
          <h2 className="mb-[20px] font-normal">Product Categories</h2>
          {data?.map(item => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label className="ml-[10px]" htmlFor={item.id}>
                {item?.attributes?.title}
              </label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2 className="mb-[20px] font-normal">Filter by price</h2>
          <div>
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={handleChangePrice} value={val} />
            <span>{maxPrice}</span>
          </div>
          <button
            className="mt-[15px] w-[100px] border border-[teal] text-[12px] py-[5px] px-[10px] rounded cursor:pointer hover:bg-[teal] hover:text-white"
            onClick={handleClear}
          >
            Clear filter
          </button>
        </div>
        <div className="filterItem">
          <h2 className="mb-[20px] font-normal">Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e => setSort('asc')} />
            <label className="ml-[10px]" htmlFor="asc">
              Price (Lowest first)
            </label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={e => setSort('desc')}
            />
            <label className="ml-[10px]" htmlFor="desc">
              Price (Highest first)
            </label>
          </div>
        </div>
      </div>
      <div className="rightProducts">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="bg"
          className="w-full h-[300px] object-cover mb-[50px]"
        />

        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  );
};

export default Products;
