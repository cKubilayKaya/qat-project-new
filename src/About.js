import React, { useEffect } from "react";
import BannerSocialBar from "./components/BannerSocialBar";
import ReactHelmet from "./components/ReactHelmet";

export default function About() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <ReactHelmet
        titleName="About"
        canonical="about"
        description="QAT is an innovative organization that produces architectural and interior design projects with its young and fresh-minded team."
      />
      <div className="about-wrapper">
        <div className="projects-wrapper homepage-wrapper about-container">
          <div className="about-wrapper">
            <div className="about-item">
              <div className="row">
                <div className="col-md-7">
                  <h1 data-aos="fade-up">Our Story</h1>
                  <p data-aos="fade-up">
                    QAT is beyond a mere architecture & interior design team, as an extension of the TAG Architects Ltd., where the universal message of
                    excellence was delivered. QAT Team approaches architecture as a language for ambience, energy, & personality. Each aspect of the QAT
                    client’s needs are assessed by the project’s passionate team to deliver impeccable & timeless designs. The QAT team goes the extra mile to
                    communicate a relaxed, long-lasting relationship with both clients & architects. Not a single part of the supply & demand chain goes
                    unnoticed at QAT, as the parts of its greatness play a vital role in its entirety.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-item">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <h1 data-aos="fade-up">The Birth of A Revolution</h1>
                  <p data-aos="fade-up">
                    For over a decade of architectural magnificence, TAG Architects Ltd. strived to create teams that exceeded expectations. This marked the
                    birth of TAG Academy, TAG Talks, and TAG Ideas, all of which were later followed by the QAT team, a result of interviewing, training, and
                    selecting over 100 people to find the perfect candidates. The result was a group of architects, interior designers & interns who created
                    some of the most compelling designs in modern existence.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-item">
              <div className="row">
                <div className="col-md-7">
                  <h1 data-aos="fade-up">The Brand Name</h1>
                  <p data-aos="fade-up">
                    QAT was named after a number of brainstorming sessions amongst its creative team members. This resulted in a plethora of words that boiled
                    down to the fundamental values of QAT anatomy: Quality, Art, Architecture, Team, Talent, Transcendence and Trust. The message was clear: QAT
                    was formed on a blueprint of trust and equality amongst its artistic team members who strived to deliver exemplary quality in every setting.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-item">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <h1 data-aos="fade-up">Who is QAT?</h1>
                  <p data-aos="fade-up">
                    QAT is a large “family” with young & fresh minds, a team created with a harmony of professionals & consultants & academicians & interns and
                    clients. QAT sees every team member and client as part of the family. With that feeling, QAT always searchs for the best alterative in
                    design while improving themselves, the client and the point of view. The result is a breathtaking creation of compelling art, guaranteed to
                    keep the most voracious of exteriors gaping at the beauty indoors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-wrapper-social-bar">
            <BannerSocialBar />
          </div>
        </div>
      </div>
    </>
  );
}
