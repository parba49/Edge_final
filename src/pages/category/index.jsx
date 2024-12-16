import { Link, useParams } from 'react-router-dom';
import Title from '../../ui/title';
import products from '../../data/best_sellers.json';
import { IoStar } from 'react-icons/io5';

export default function CategoryPage() {
  const { name } = useParams();
  return (
    <section className='container mx-auto py-4'>
      <Title>{name}</Title>
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
