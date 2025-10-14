"use client";
import { useEffect, useRef } from "react";
import "./skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaGitAlt,
  FaUnity,
  FaFigma,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiBlender,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const icons = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaJs />,
  <FaReact />,
  <FaNode />,
  <FaPython />,
  <FaGitAlt />,
  <SiNextdotjs />,
  <FaUnity />,
  <SiBlender />,
  <FaFigma />,
  <BiLogoPostgresql />,
  <FaGithub />,
  <SiAdobephotoshop />,
  <SiAdobepremierepro />,
  <SiAdobeillustrator />,
  <SiAdobelightroom />,
  <FaWordpress />,
  <SiTypescript />,
];

const Skills: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2; // one set’s width
    track.style.setProperty("--scroll-width", `${totalWidth}px`);
  }, []);
  return (
    <div className="skills-container">
      <div className="skills-slider">
        <div className="skills-track" ref={trackRef}>
          {[...icons, ...icons].map((icon, i) => (
            <div key={i} className="icon-card">
              <div className="icon">{icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
