import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Projects() {
    return (
      <>
        <section id="projects" className="project">
          <div className="container">
            <div className="project-content">
              <p className='projects-title'>MY PROJECTS</p>
              <div className="projects-grid">
                <div className="project-box">
                  <h4>eBird Big Data Analysis using Apache Spark</h4>
                  <p>In this project, I developed a robust data analytics platform utilizing Apache Spark to perform advanced data processing tasks efficiently. The application was implemented in Scala and managed through Maven for dependency management and build processes.</p>
                  <a href="https://github.com/srodr007/eBird-Data-Analysis.git" target="_blank" rel="noreferrer">
                    <FaGithub size={24} />
                  </a>
                </div>
  
                <div className="project-box">
                  <h4>Deep Learning Model for Recycling</h4>
                  <p>This initiative was designed to facilitate effective recycling processes. Utilizing a comprehensive dataset of waste images, our team developed a model capable of identifying the type of waste from user-uploaded images and correctly classifying it for appropriate disposal.</p>
                  <a href="https://github.com/srodr007/Recycling-Deep-Learning-Model.git" target="_blank" rel="noreferrer">
                    <FaGithub size={24} />
                  </a>
                </div>
  
                <div className="project-box">
                  <h4>Pacman Game Design with Intelligent Agent</h4>
                  <p>In collaboration with a classmate, I co-developed an intelligent Pacman game as part of our machine learning coursework at Universidad Carlos III de Madrid. This project was centered on employing reinforcement learning to design an intelligent Pacman capable of navigating the game environment optimally to maximize scores while minimizing time.</p>
                  <a href="https://github.com/srodr007/Pacman-Game.git" target="_blank" rel="noreferrer">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Projects;
