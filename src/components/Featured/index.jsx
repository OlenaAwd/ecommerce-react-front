import Card from '../Card';
import useFetch from '../../hooks/useFetch';

const Featured = ({ type }) => {
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
  return (
    <div className="my-[100px] mx-[200px]">
      {/* top */}
      <div className="flex items-center justify-between mb-[50px]">
        <h1 className="flex-2 capitalize font-bold bg-red-300 pr-[45px]">{type} products</h1>
        <p className="flex-3 text-[#808080] bg-yellow-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          {/* {/* eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan */}
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas.lacus vel facilisis labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      {/* bottom */}
      <div className="flex justify-center gap-[50px]">
        {error
          ? 'Something went wrong!'
          : loading
          ? 'Loading ...'
          : data?.map(item => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Featured;
