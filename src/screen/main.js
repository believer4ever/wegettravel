import React from 'react';
import Header from '../sections/header/header';
import CarouselSection from '../sections/carousel/carousel';
import Popular from '../sections/popular/popular';
import Tours from '../sections/tours/tours';
import Email from '../sections/email/email';
import Work from '../sections/work/work';
import Footer from '../sections/footer/footer';
function Main() {
  return (
    <div className="main">
      <Header />
      <CarouselSection />
      <Popular />
      <Tours />
      <Email />
      <Work />
      <Footer />
    </div>
  );
}

export default Main;
