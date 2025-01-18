import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import SectionTitle from './SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

import { FcRating } from 'react-icons/fc';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(()=>{
    fetch("/reviews.json")
    .then(res=>res.json())
    .then(data=>{
      setReviews(data)
    })
  },[])
  return (
    <section className="mt-10">
      <SectionTitle
      heading={"Testimonials"}
      subHeading={"What People Say"}
      >

      </SectionTitle>
      <div className="m-24 mx-24 items-center">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
       {
        reviews.map(review => 
          <SwiperSlide key={review._id}>
        <FcRating className="text-3xl text-center" />

          <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
            <p className="py-8">{review.details}</p>
            <h3 className="text-3xl text-yellow-500">{review.name}</h3>
          </SwiperSlide>)
       }
        
      </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;