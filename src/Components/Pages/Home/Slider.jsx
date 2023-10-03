import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade,Autoplay } from 'swiper/modules';
import "./Slider.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay} from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import profilePic1 from "../../assets/profilePic1.jpg";
import profilePic2 from "../../assets/profilePic2.jpg";
import profilePic3 from "../../assets/profilePic3.jpg";

const Slider = () => {


  const clients = [
    {
      id: 1,
      img: profilePic1,
      review: "Client 1 review text here...",
    },
    {
      id: 2,
      img: profilePic2,
      review: "Client 2 review text here...",
    },
    {
      id: 3,
      img: profilePic3,
      review: "Client 3 review text here...",
    },
    // Add more clients with image URLs and review texts as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 2000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [clients.length]);

  return (
    <div className="t-wrapper" id="testimonial">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade ,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        effect="Coverflow"
        navigation
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        initialSlide={currentIndex} // Set the initial slide index
      >
        {clients.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="testimonial">
              <img src={client.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider