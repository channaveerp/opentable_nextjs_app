import React from 'react';
import Header from './component/Header';
import Form from './component/Form';

const Reservation = () => {
  return (
    <div className='border-t h-screen'>
      <div className='py-9 w-3/5 m-auto'>
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default Reservation;
