import React from 'react';
import Header from './component/Header';
import SearchSidebar from './component/SearchSidebar';
import RestaurantCard from './component/RestaurantCard';

const Search = () => {
  return (
    <>
      <div className='bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2'>
        <Header />
      </div>
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar />
        <div className='w-5/6'>
          <RestaurantCard />
        </div>
      </div>
    </>
  );
};

export default Search;
