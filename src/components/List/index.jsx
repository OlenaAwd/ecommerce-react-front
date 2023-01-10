import useFetch from '../../hooks/useFetch';
import Card from '../Card';

const List = ({ subCats, maxPrice, catId, sort }) => {
  console.log(sort);
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      item => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="flex justify-between flex-wrap">
      {loading ? 'Loading ...' : data?.map(item => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
