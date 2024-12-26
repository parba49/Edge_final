import Title from '../../ui/title';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiRequest from '../../utils/apiRequest';
import categories from '../../data/categories.json';

export default function Category() {
  
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
