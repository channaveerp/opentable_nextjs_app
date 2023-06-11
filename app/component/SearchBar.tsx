'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SearchBar = () => {
  const router = useRouter();
  const [location, setLoaction] = useState('');

  const handleClick = () => {
    if (location === 'banana') return;
    router.push('search');
  };
  return (
    <div className='flex justify-center m-auto text-left py-3 text-lg'>
      <input
        type='text'
        className='py-2 px-2 rounded w-[450px] mr-3'
        placeholder='state,city or town'
        onChange={(e) => setLoaction(e.target.value)}
      />
      <button
        className='py-2  px-9 bg-red-600 text-white rounded font-medium '
        onClick={handleClick}>
        Lets go
      </button>
    </div>
  );
};

export default SearchBar;
