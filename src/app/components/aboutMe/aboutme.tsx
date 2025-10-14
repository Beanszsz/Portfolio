import "./aboutme.css";

const AboutMe: React.FC = () => {
  return (
    <section className="about-me" id="aboutme">
      <div className="about-me-container">
        <div className="about-me-content">
          <h2 className="about-me-title">About Me</h2>
          <p className="about-me-description">
            I am a passionate <strong>web developer</strong> with experience in
            building dynamic and responsive web applications. My journey in tech
            started with a curiosity for how things work, and it has evolved
            into a love for creating seamless user experiences.
            <br></br>
            <br></br>
            Has a foundational understanding of programming in the languages of{" "}
            <strong>Python</strong> and <strong>JavaScript</strong>. I'm looking
            to sharpen my abilities and expand my expertise when in comes to
            game development, web development particularly front-end and graphic
            design like photo editing, etc.
          </p>
        </div>
        <div className="image-container">
          <div className="about-me-image">
            <img src="/Portfolio_profilePic.png" alt="About Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
