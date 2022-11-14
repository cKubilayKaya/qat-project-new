import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import TeamImage1 from "../assets/images/team/team-1.webp";
import TeamImage2 from "../assets/images/team/team-2.webp";
import TeamImage3 from "../assets/images/team/team-3.webp";
import TeamImage4 from "../assets/images/team/team-4.webp";
import TeamImage5 from "../assets/images/team/team-5.webp";
import TeamImage6 from "../assets/images/team/team-6.webp";
import TeamImage7 from "../assets/images/team/team-7.webp";
import TeamImage8 from "../assets/images/team/team-8.webp";
import TeamImage9 from "../assets/images/team/team-9.webp";
import TeamImage10 from "../assets/images/team/team-10.webp";
import TeamImage11 from "../assets/images/team/team-11.webp";
import TeamImage12 from "../assets/images/team/team-12.webp";
import TeamImage13 from "../assets/images/team/team-13.png";
import TeamImage14 from "../assets/images/team/team-14.webp";

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function HomeTeamSection() {
  const [team] = useState([
    {
      id: 1,
      name: "Mert Tanrıkulu",
      title: "Founding Partner, Architect, Creative & Architectural Design Director",
      social: "https://www.linkedin.com/",
      avatar: TeamImage1,
    },
    {
      id: 16,
      name: "Recep Gökay Gökçe",
      title: "Founding Partner, Architect, Construction Projects Director",
      social: "https://www.linkedin.com/",
      avatar: TeamImage14,
    },
    {
      id: 2,
      name: "Gizem Çolak",
      title: "Interior Architect",
      social: "https://www.linkedin.com/",
      avatar: TeamImage2,
    },
    {
      id: 3,
      name: "Hilal Kuş",
      title: "Interior Architect",
      social: "https://www.linkedin.com/",
      avatar: TeamImage3,
    },
    {
      id: 4,
      name: "Nesrin Özbağ",
      title: "Architect",
      social: "https://www.linkedin.com/",
      avatar: TeamImage4,
    },
    {
      id: 5,
      name: "Semih Doğan",
      title: "Interior Architect",
      social: "https://www.linkedin.com/",
      avatar: TeamImage5,
    },
    {
      id: 6,
      name: "Enes Davran",
      title: "Architect",
      social: "https://www.linkedin.com/",
      avatar: TeamImage6,
    },
    {
      id: 7,
      name: "Kasım Fahrettin Çimen",
      title: "Interior Architect",
      social: "https://www.linkedin.com/",
      avatar: TeamImage7,
    },
    {
      id: 8,
      name: "Havvanur Bıçakçı",
      title: "Interior Architect",
      social: "https://www.linkedin.com/",
      avatar: TeamImage8,
    },
    {
      id: 9,
      name: "Itri Atay, PhD",
      title: "Spain Branch Director",
      social: "https://www.linkedin.com/",
      avatar: TeamImage9,
    },
    {
      id: 10,
      name: "Sezer Yılmaz",
      title: "Architect",
      social: "https://www.linkedin.com/",
      avatar: TeamImage10,
    },
    {
      id: 11,
      name: "Serra Sude Gökçe",
      title: "Architect",
      social: "https://www.linkedin.com/",
      avatar: TeamImage11,
    },
    {
      id: 12,
      name: "Tuana Kalaycı",
      title: "Interior Architect",
      social: "https://www.linkedin.com/",
      avatar: TeamImage12,
    },
    {
      id: 13,
      name: "Luba Kolmakov",
      title: "Spain Office Coordinator",
      social: "https://www.linkedin.com/",
      avatar: TeamImage13,
    },
    {
      id: 14,
      name: "Oktay Özcan",
      title: "Architect",
      social: "https://www.linkedin.com/",
      avatar: TeamImage13,
    },
    {
      id: 15,
      name: "Fırtına Aden & Kasırga Luka",
      title: "Mascot",
      social: "https://www.linkedin.com/",
      avatar: TeamImage13,
    },
  ]);
  return (
    <div className="home-section-wrapper">
      <Swiper
        slidesPerView={5.5}
        spaceBetween={180}
        loop="true"
        navigation={true}
        modules={[Pagination, Navigation]}
        className="home-team-slide"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          400: {
            slidesPerView: 1.5,
            spaceBetween: 32,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          991: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3.5,
            spaceBetween: 80,
          },
          1400: {
            slidesPerView: 4.5,
            spaceBetween: 120,
          },
          1800: {
            slidesPerView: 5.5,
            spaceBetween: 180,
          },
        }}
      >
        {team.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.avatar} alt="" data-aos="fade-up" />
            <div className="text">
              <h1 data-aos="fade-up">{item.name}</h1>
              <p data-aos="fade-up">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
