import { useParams } from 'react-router-dom';

export default function OurDetailsPage() {
  const { name } = useParams();
  const data = [
    {
      id: 'sayem',
      name: 'Abdullah Mohammad Sayem',
      email: 'msayem089@gmail.com',
      mobile: '01515675571',
    },
    {
      id: 'parba',
      name: 'Parba Das Gupta',
      email: 'iiuccsestudent@gmail.com',
      mobile: '01625429395',
    },
    {
      id: 'faisal',
      name: 'Mohammad Faisal Fardin Chowdhury',
      email: 'fardinfaisal005@gmail.com',
      mobile: '01815246166',
    },
  ];
  return (
    <div className='h-[82vh] flex items-center justify-center flex-col'>
      <div className='w-full max-w-md mc-auto h-[82vh] bg-white rounded-lg p-5'>
        <h2 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
          Contact details
        </h2>
        <ul className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <li className='flex gap-2 my-2'>
            <strong>Name : </strong>
            <span>{data?.find((item) => item?.id === name)?.name}</span>
          </li>
          <li className='flex gap-2 my-2'>
            <strong>Email : </strong>
            <a
              href={`mailto:${data?.find((item) => item?.id === name)?.email}`}
            >
              {data?.find((item) => item?.id === name)?.email}
            </a>
          </li>
          <li className='flex gap-2 my-2'>
            <strong>Mobile : </strong>
            <a href={`tel:${data?.find((item) => item?.id === name)?.mobile}`}>
              {data?.find((item) => item?.id === name)?.mobile}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
