import React from "react";
import "../index.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const skillsIcons = [{
  img: "https://skillicons.dev/icons?i=py",
  id: 1
}, {
  img: "https://skillicons.dev/icons?i=r",
  id: 2
}, {
  img: "https://skillicons.dev/icons?i=js",
  id: 3
}, {
    img: "https://skillicons.dev/icons?i=java",
    id: 4
},{
    img: "https://skillicons.dev/icons?i=jquery",
    id: 14
}, {
  img: "https://skillicons.dev/icons?i=matlab",
  id: 5
}, {
  img: "https://skillicons.dev/icons?i=html",
  id: 6
}, {
    img: "https://skillicons.dev/icons?i=css",
    id: 7
}, {
    img: "https://skillicons.dev/icons?i=scala",
    id: 17
}];

const DatabaseIcons = [{
    img: "https://skillicons.dev/icons?i=mongodb",
    id: 8
  },{
    img: "https://skillicons.dev/icons?i=maven",
    id: 9
  },{
    img: "https://skillicons.dev/icons?i=pycharm",
    id: 10
  },{
    img: "https://skillicons.dev/icons?i=vscode",
    id: 11
  },  {
    img: "https://skillicons.dev/icons?i=idea",
    id: 12
  }, {
    img: "https://skillicons.dev/icons?i=react",
    id: 13
  }, {
    img: "https://skillicons.dev/icons?i=nodejs",
    id: 15
  }, {
    img: "https://skillicons.dev/icons?i=powershell",
    id: 16
  }];

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Sergio Rodriguez</h1>
                <p>
                  Hi, I'm a passionate Data Scientist based in Spain. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/sergio-rodriguez-valbuena"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/srodr007"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="hero-img-container">
                <div className="hero-img"></div>
              </div>


            </div>

            <div className="database">
              <p>IDE & Tools</p>
              <div className="db-logos">
                <ul>
                  {DatabaseIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="database-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="skills">
              <p>Technical Skills</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
