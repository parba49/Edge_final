import Title from '../../ui/title';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiRequest from '../../utils/apiRequest';
import categories from '../../data/categories.json';

export default function Category() {
  // const [categories, setCategories] = useState([]);

  // const handleApiCall = async () => {
  //   try {
  //     const data = await apiRequest.get('/product-category-list', {
  //       headers: {
  //         'x-rapidapi-key':
  //           '26d680d24emsh15e5224cda17b80p1265adjsn6bac4110c86c',
  //         'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
  //       },
  //     });
  //     setCategories(data?.data?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   // handleApiCall();
  // }, []);
  return (
    <section className='container mx-auto py-4'>
      <Title>Categories</Title>
      <div className='flex flex-wrap gap-4'>
        {categories?.map((category) => (
          <Link
            key={category?.id}
            to={'/category/' + category?.name}
            className='border p-4 rounded-md flex flex-col items-center'
          >
            <p>{category?.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
