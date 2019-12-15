import React from 'react';
import HotelHeader from '../sections/hotel-header/header';
import Footer from '../sections/footer/footer';
import HotelsList from '../sections/hotels-list/hotels-list';
function Hotels() {
  return (
    <div className="hotels">
      <HotelHeader />
      <HotelsList />
      <Footer />
    </div>
  );
}

export default Hotels;
