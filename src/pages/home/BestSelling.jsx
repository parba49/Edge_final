import { Link } from 'react-router-dom';
import Title from '../../ui/title';
import { useEffect, useState } from 'react';
import apiRequest from '../../utils/apiRequest';
import products from '../../data/best_sellers.json';
import { IoStar } from 'react-icons/io5';

export default function BestSelling() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await apiRequest.get('/best-sellers', {
  //         headers: {
  //           'x-rapidapi-key':
  //             '26d680d24emsh15e5224cda17b80p1265adjsn6bac4110c86c',
  //           'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
  //         },
  //       });
  //       setProducts(data?.data?.best_sellers);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  return (
    <section className='container mx-auto py-4'>
      <Title>Best Sellers</Title>
      <div className='grid grid-cols-4 gap-6'>
        {products?.map((product) => (
          <Link key={product?.rank} to={'/product/' + product?.asin}>
            <img
              src={product?.product_photo}
              alt={product?.title}
              className='w-full object-cover'
            />
            <h2 className='text-xl font-medium mt-3 line-clamp-2'>
              {product?.product_title}
            </h2>
            <small className='flex gap-4 whitespace-nowrap'>
              <span>
                <strong>Price : </strong> {product?.product_price}
              </span>
              <span className='flex items-center gap-1'>
                {product?.product_star_rating}{' '}
                <IoStar className='text-yellow-400' />
              </span>
            </small>
          </Link>
        ))}
      </div>
    </section>
  );
}
