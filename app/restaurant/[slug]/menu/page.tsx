import React from 'react';
import Header from './component/Header';
import RestaurantNavbar from '../component/RestaurantNavbar';
import Menu from '../component/Menu';

const RestaurantMenu = () => {
  return (
    <div className='bg-white w-[100%] rounded p-3 shadow'>
      <RestaurantNavbar />
      <Menu />
    </div>
  );
};

export default RestaurantMenu;
