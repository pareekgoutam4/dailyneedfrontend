import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { Navigation, Pagination, Scrollbar, EffectFade } from "swiper/modules";

export default function Banner() {
  const images = [

    "https://media.istockphoto.com/id/2228011090/photo/healthy-autumnal-fruits-and-vegetables-on-kitchen-table-fresh-organic-seasonal-produce.webp?a=1&b=1&s=612x612&w=0&k=20&c=5oO0pCP3Szmv3KMNkTEWwXxgLuv4bD1cH0MT4-sXC5M="

    ,
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D",
  ];

  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, EffectFade]}
      effect="fade"
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      style={{ width: "100%", height: "100%" , overflow : "hidden" 


       }}>
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "60vh", objectFit: "cover" , overflow : "hidden" }}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
}