import React from 'react';
import Header from './component/Header';

const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        {children}
      </div>
    </div>
  );
};

export default RestaurantLayout;
