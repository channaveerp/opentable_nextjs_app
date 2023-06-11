import React from 'react';
import Header from './component/Header';
import RestaurantNavbar from './component/RestaurantNavbar';
import Title from './component/Title';
import Rating from './component/Rating';
import Description from './component/Description';
import Images from './component/Images';
import Review from './component/Review';
import ReservationCard from './component/ReservationCard';

const RestaurantDetails = () => {
  return (
    <>
      <Header />
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        <div className='bg-white w-[70%] rounded p-3 shadow'>
          <RestaurantNavbar />
          <Title />
          <Rating />
          <Description />
          <Images />
          <Review />
        </div>
        <div className='w-[27%] relative text-reg'>
          <ReservationCard />
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
