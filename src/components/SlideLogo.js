import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import Logo2 from "../assets/images/slide-logo/airfrance.webp";
import Logo3 from "../assets/images/slide-logo/atasay.webp";
import Logo4 from "../assets/images/slide-logo/aurum.png";
import Logo5 from "../assets/images/slide-logo/bkg.png";
import Logo6 from "../assets/images/slide-logo/blue.webp";
import Logo7 from "../assets/images/slide-logo/cevre.webp";
import Logo8 from "../assets/images/slide-logo/choco.webp";
import Logo9 from "../assets/images/slide-logo/dilek.webp";
import Logo10 from "../assets/images/slide-logo/egalistanbul.webp";
import Logo11 from "../assets/images/slide-logo/emlak.webp";
import Logo12 from "../assets/images/slide-logo/esenler.webp";
import Logo13 from "../assets/images/slide-logo/eskon.webp";
import Logo14 from "../assets/images/slide-logo/hbf.webp";
import Logo15 from "../assets/images/slide-logo/istanbul.webp";
import Logo16 from "../assets/images/slide-logo/kahvekulesi.webp";
import Logo17 from "../assets/images/slide-logo/keym.webp";
import Logo18 from "../assets/images/slide-logo/lizay.webp";
import Logo19 from "../assets/images/slide-logo/mado.webp";
import Logo20 from "../assets/images/slide-logo/markled.webp";
import Logo21 from "../assets/images/slide-logo/mimarlik.webp";
import Logo22 from "../assets/images/slide-logo/nef.webp";
import Logo23 from "../assets/images/slide-logo/ofton.webp";
import Logo24 from "../assets/images/slide-logo/ortadogu.png";
import Logo25 from "../assets/images/slide-logo/projeyonetim.webp";
import Logo26 from "../assets/images/slide-logo/q.webp";
import Logo27 from "../assets/images/slide-logo/restora.webp";
import Logo28 from "../assets/images/slide-logo/sarilar.webp";
import Logo29 from "../assets/images/slide-logo/storks.webp";
import Logo30 from "../assets/images/slide-logo/toki.webp";
import Logo31 from "../assets/images/slide-logo/yesilgo.webp";
import Logo32 from "../assets/images/slide-logo/musall.webp";

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function SlideLogo() {
  const [logo] = useState([
    {
      id: 2,
      image: Logo2,
    },
    {
      id: 3,
      image: Logo3,
    },
    {
      id: 4,
      image: Logo4,
    },
    {
      id: 5,
      image: Logo5,
    },
    {
      id: 6,
      image: Logo6,
    },
    {
      id: 7,
      image: Logo7,
    },
    {
      id: 8,
      image: Logo8,
    },
    {
      id: 9,
      image: Logo9,
    },
    {
      id: 10,
      image: Logo10,
    },
    {
      id: 11,
      image: Logo11,
    },
    {
      id: 12,
      image: Logo12,
    },
    {
      id: 13,
      image: Logo13,
    },
    {
      id: 14,
      image: Logo14,
    },
    {
      id: 15,
      image: Logo15,
    },
    {
      id: 16,
      image: Logo16,
    },
    {
      id: 17,
      image: Logo17,
    },
    {
      id: 18,
      image: Logo18,
    },
    {
      id: 19,
      image: Logo19,
    },
    {
      id: 20,
      image: Logo20,
    },
    {
      id: 21,
      image: Logo21,
    },
    {
      id: 22,
      image: Logo22,
    },
    {
      id: 23,
      image: Logo23,
    },
    {
      id: 24,
      image: Logo24,
    },
    {
      id: 25,
      image: Logo25,
    },
    {
      id: 26,
      image: Logo26,
    },
    {
      id: 27,
      image: Logo27,
    },
    {
      id: 28,
      image: Logo28,
    },
    {
      id: 29,
      image: Logo29,
    },
    {
      id: 30,
      image: Logo30,
    },
    {
      id: 31,
      image: Logo31,
    },
    {
      id: 32,
      image: Logo32,
    },
  ]);
  return (
    <div>
      <Swiper
        slidesPerView={8}
        spaceBetween={64}
        centeredSlides={true}
        speed={2000}
        autoplay={{ delay: 1 }}
        loop="true"
        navigation={true}
        className="slideText slideTextBlue slideLogo"
        allowTouchMove={false}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
          1800: {
            slidesPerView: 8,
          },
        }}
      >
        {logo.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} className="img-fluid w-75" alt="" data-aos="fade-up" />
            {/* <h1>sa</h1> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
