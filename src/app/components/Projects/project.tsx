"use client";
import "./project.css";
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Project: React.FC<Project> = ({ title, description, image, link }) => {
  return (
    <div className="project">
      <div className="project-wrapper">
        <div className="project-container1">
          <div className="project-image">
            <img src="/tagalonggo.png" alt={title} />
          </div>

          <div className="project-desc">
            <h3>{title} Tagalonggo POS Tagger</h3>
            <p>
              {description}Part-of-Speech Taggers for Tagalog-Ilonggo Texts
              Using Same Sentence and Sentence Order Prediction with and without
              Data Augmentation, explores the effectiveness of BERT-based
              language models in tagging parts of speech for bilingual
              Tagalog-Ilonggo datasets.
            </p>
            <a
              href="https://github.com/emanuel01251/Thesis"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-container2">
          <div className="project-image2">
            <img src="/mapuppic1.png" alt={title} />
          </div>

          <div className="project-desc">
            <h3>{title} MaPUP App</h3>
            <p>
              {description}"MaPUP" was developed to help people navigate the PUP
              main campus. Although it may be made available to be used by
              anyone, students are the major intended audience.
            </p>
            <a
              href="https://github.com/Pochiiita/MaPup"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      <div className="project-wrapper2">
        <div className="project-container3">
          <div className="project-image3">
            <img src="/matchmunchlogo.png" alt={title} />
          </div>

          <div className="project-desc">
            <h3>{title} Match n Munch</h3>
            <p>
              {description}Match n Munch is an upgraded memory game designed to
              enhance memory retention through fun and engaging gameplay.
              Players match pairs of food-themed cards, challenging their focus
              with its colorful visuals and progressive difficulty levels.
            </p>
            <a
              href="https://github.com/chellean-1120/Match-N-Munch"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-container4">
          <div className="project-image4">
            <img src="/iykyk language.png" alt={title} />
          </div>

          <div className="project-desc">
            <h3>{title} IYKYK Programming Language</h3>
            <p>
              {description}This programming language facilitates real-time
              collaborative editing of source code, allowing multiple developers
              to edit code within a live session. The language's portal is
              powered by Socket.IO, which manages real-time changes between
              sessions.
            </p>
            <a
              href="https://github.com/markcalendario/iykyk-lang"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
