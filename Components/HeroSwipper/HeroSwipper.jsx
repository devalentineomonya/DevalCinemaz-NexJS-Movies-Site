"use client";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import HeroTrending from "../HeroTrending/HeroTrending";

export default function HeroSwipper({ sliderMovies }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} cursor-pointer max-h-5 max-w-5 min-h-5 min-w-5 mr-3 p-1 font-Dosis shrink-0 rounded-full bg-customGreen inline-block"></span>`;
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderMovies.slice(0,10).map((sliderMovie, i) => (
          <SwiperSlide key={i}>
            <HeroTrending sliderMovie={sliderMovie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
