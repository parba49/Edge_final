import { Link } from 'react-router-dom';
import Title from '../../ui/title';

export default function AboutPage() {
  return (
    <section className='container mx-auto py-4 h-[82vh]'>
      <Title>About Us</Title>
      <div className='grid grid-cols-2 gap-6'>
       
        <div className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex flex-col items-center py-10 px-4'>
            <img
              className='w-24 h-24 mb-3 rounded-full shadow-lg'
              src='https://avatars.githubusercontent.com/u/108083254?v=4'
              alt='Parba'
            />
            <h5 className='mb-1 text-xl font-medium text-white text-center'>
              Parba Das Gupta
            </h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Front-End Developer
            </span>
            <div className='flex mt-4 md:mt-6'>
              <Link
                to='/ourdetails/parba'
                href='#'
                className='py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                Details
              </Link>
            </div>
          </div>
        </div>

        <div className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex flex-col items-center py-10 px-4'>
            <img
              className='w-24 h-24 mb-3 rounded-full shadow-lg'
              src="https://avatars.githubusercontent.com/u/98274125?v=4"
              alt='Sujay'
            />
            <h5 className='mb-1 text-xl font-medium text-white text-center'>
              Sujay Chowdhury
            </h5>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              Front-End Developer
            </span>
            <div className='flex mt-4 md:mt-6'>
              <Link
                to='/ourdetails/sujay'
                href='#'
                className='py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
