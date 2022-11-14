import React, { useEffect, useState } from "react";
import BannerSocialBar from "./components/BannerSocialBar";
import TeamItem from "./components/TeamItem";
import TeamImage1 from "./assets/images/team-members/team-1.png";
import TeamImage2 from "./assets/images/team-members/team-2.png";
import TeamImage3 from "./assets/images/team-members/team-3.png";
import TeamImage4 from "./assets/images/team-members/team-4.png";
import TeamImage5 from "./assets/images/team-members/team-5.png";
import TeamImage6 from "./assets/images/team-members/team-6.png";
import TeamImage7 from "./assets/images/team-members/team-7.png";
import TeamImage8 from "./assets/images/team-members/team-8.png";
import TeamImage9 from "./assets/images/team-members/team-9.png";
import TeamImage10 from "./assets/images/team-members/team-10.png";
import TeamImage11 from "./assets/images/team-members/team-11.png";
import TeamImage12 from "./assets/images/team-members/team-12.png";
import TeamImage13 from "./assets/images/team-members/team-13.png";
import TeamImage14 from "./assets/images/team-members/team-14.png";
import ReactHelmet from "./components/ReactHelmet";
import TeamSkeleton from "./components/TeamSkeleton";

export default function Team() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [team] = useState([
    {
      id: 1,
      name: "Mert Tanrıkulu",
      title: "Founding Partner, Architect, Creative & Architectural Design Director",
      social: "https://www.linkedin.com/in/mert-tanrikulu",
      avatar: TeamImage1,
    },
    {
      id: 16,
      name: "Recep Gökay Gökçe",
      title: "Founding Partner, Architect, Construction Projects Director",
      social: "https://www.linkedin.com/in/recepgokaygokce/",
      avatar: TeamImage14,
    },
    {
      id: 2,
      name: "Gizem Çolak",
      title: "Interior Architect",
      social: "http://linkedin.com/in/gzmclk",
      avatar: TeamImage2,
    },
    {
      id: 3,
      name: "Hilal Kuş",
      title: "Interior Architect",
      social: "https://www.linkedin.com/in/hilalkus",
      avatar: TeamImage3,
    },
    {
      id: 4,
      name: "Nesrin Özbağ",
      title: "Architect",
      social: "http://linkedin.com/in/nesrin-özbağ",
      avatar: TeamImage4,
    },
    {
      id: 5,
      name: "Semih Doğan",
      title: "Interior Architect",
      social: "https://www.linkedin.com/in/semihdoğan",
      avatar: TeamImage5,
    },
    {
      id: 6,
      name: "Enes Davran",
      title: "Architect",
      social: "https://www.linkedin.com/company/qat-project/",
      avatar: TeamImage6,
    },
    {
      id: 7,
      name: "Kasım Fahrettin Çimen",
      title: "Interior Architect",
      social: "https://www.linkedin.com/in/fahrettincimen",
      avatar: TeamImage7,
    },
    {
      id: 8,
      name: "Havvanur Bıçakçı",
      title: "Interior Architect",
      social: "https://www.linkedin.com/in/havanur-bicakci",
      avatar: TeamImage8,
    },
    {
      id: 9,
      name: "Itri Atay, PhD",
      title: "Spain Branch Director",
      social: "https://www.linkedin.com/company/qat-project/",
      avatar: TeamImage9,
    },
    {
      id: 10,
      name: "Sezer Yılmaz",
      title: "Architect",
      social: "https://www.linkedin.com/in/sezeryılmaz",
      avatar: TeamImage10,
    },
    {
      id: 11,
      name: "Serra Sude Gökçe",
      title: "Architect",
      social: "https://www.linkedin.com/in/serra-sude-g%C3%B6k%C3%A7e-183185241",
      avatar: TeamImage11,
    },
    {
      id: 12,
      name: "Tuana Kalaycı",
      title: "Interior Architect",
      social: "https://www.linkedin.com/in/tuana-kalayci/",
      avatar: TeamImage12,
    },
    {
      id: 13,
      name: "Luba Kolmakov",
      title: "Spain Office Coordinator",
      social: "https://www.linkedin.com/company/qat-project/",
      avatar: TeamImage13,
    },
    {
      id: 14,
      name: "Oktay Özcan",
      title: "Architect",
      social: "https://www.linkedin.com/in/oktay-ozcan/",
      avatar: TeamImage13,
    },
    {
      id: 15,
      name: "Fırtına Aden & Kasırga Luka",
      title: "Mascot",
      social: "https://www.linkedin.com/company/qat-project/",
      avatar: TeamImage13,
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <ReactHelmet
        titleName="Team"
        canonical="team"
        description="All projects for the client's needs are evaluated by the passionate QAT team in order to offer flawless and timeless designs in every aspect. The result is breathtaking architectural works that dazzle with their beauty."
      />
      <div className="projects-wrapper homepage-wrapper">
        <div className="team ">
          {team.map((item) => (
            <div key={item.id}>
              <img src={item.avatar} className="projects-image-opacity-zero" alt="" onLoad={(_) => setIsLoading(true)} />
              {isLoading ? <TeamItem avatar={item.avatar} title={item.title} name={item.name} social={item.social} /> : <TeamSkeleton />}
            </div>
          ))}
        </div>
        <div className="projects-wrapper-social-bar">
          <BannerSocialBar />
        </div>
      </div>
    </>
  );
}
