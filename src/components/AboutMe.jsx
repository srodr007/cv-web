import React from 'react';
import AboutImg from "../media/about-img.webp";
import RoundedText from "../media/text2.svg";
import WorkingEmoji from "../media/working-emoji.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About Me</h3>
              <h4>
                Universidad Carlos III de Madrid 📍
              </h4>
              <p>
                Currently, I am enrolled in a Data Science and Engineering degree 📖. <br /> I am a hardworking, proactive, and innovative individual with strong team skills. My passion is AI 🤖.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
