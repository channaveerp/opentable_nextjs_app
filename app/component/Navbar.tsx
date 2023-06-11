import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-white p-4 flex justify-between'>
      <Link href='/' className='font-bold text-gray-700 text-2xl'>
        {' '}
        OpenTable{' '}
      </Link>
      <div className='flex align-center gap-5px'>
        <button className='bg-blue-500 p-1 px-4 rounded mr-3 text-white'>
          Sign in
        </button>
        <button className='border p-1 px-4 rounded'>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
