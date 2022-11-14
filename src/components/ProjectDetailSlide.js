import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function ProjectDetailSlide({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container-without-margin projectDetailSlideWrapper">
      {images && images.length === 1 ? (
        <div className="project-detail-solo-image-wrapper">
          <img src={`/${images}`} alt="" className="project-detail-solo-image" />
        </div>
      ) : (
        <>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            watchOverflow
            observer={"true"}
            updateOnWindowResize={"true"}
            loop="true"
            thumbs={{ swiper: thumbsSwiper }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, FreeMode, Navigation, Thumbs]}
            className="mySwiper projectDetailSlide"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
            }}
          >
            {images &&
              images.map((item) => (
                <SwiperSlide key={item}>
                  <img src={`/${item}`} alt="" data-aos="fade-up" />
                </SwiperSlide>
              ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper projectDetailSlideItems"
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {images &&
              images.map((item) => (
                <SwiperSlide key={item}>
                  <img src={`/${item}`} alt="" data-aos="fade-up" />
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      )}
    </div>
  );
}
