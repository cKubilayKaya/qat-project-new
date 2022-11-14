import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import BannerSlideImage1 from "../assets/images/home-slide/01.webp";
import BannerSlideImage2 from "../assets/images/home-slide/02.webp";
import BannerSlideImage3 from "../assets/images/home-slide/03.webp";
import BannerSlideImage4 from "../assets/images/home-slide/04.webp";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function BannerSlide() {
  const [projects] = useState([
    {
      id: 1,
      name: "Raslan Dental Clinic",
      place: "Barcelona / Spain",
      link: "project/62",
      image: BannerSlideImage4,
    },

    {
      id: 2,
      name: "Oman Office",
      place: "Oman / Oman",
      link: "project/52",
      image: BannerSlideImage3,
    },
    {
      id: 3,
      name: "Başakşehir 1337-1",
      place: "İstanbul / Turkey",
      link: "project/7",
      image: BannerSlideImage1,
    },
    {
      id: 4,
      name: "Kagıthane 4372",
      place: "İstanbul / Turkey",
      link: "project/57",
      image: BannerSlideImage2,
    },
  ]);
  return (
    <div className="container-without-margin">
      <Swiper
        slidesPerView={2.3}
        spaceBetween={30}
        loop="true"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mySwiperBanner"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          576: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
        }}
      >
        {projects.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="" data-aos="fade-up" />
            <Link to={item.link} className="text" data-aos="fade-down">
              <h1>{item.name}</h1>
              <p>{item.place}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
