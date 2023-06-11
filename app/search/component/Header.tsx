import React from 'react';
import SearchBar from '../../component/SearchBar';

const Header = () => {
  return (
    <div className='text-left text-lg py-3 m-auto flex justify-center'>
      <SearchBar />
    </div>
  );
};

export default Header;
