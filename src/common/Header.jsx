import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-slate-900 text-white sticky top-0'>
      <header className='container mx-auto py-4 flex justify-between items-center'>
        <Link to='/'>
          <h1 className='text-4xl font-bold'>AmaCommerce</h1>
        </Link>
        <ul className='flex gap-x-4'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
