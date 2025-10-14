"use client";
import React from "react";
import "./landingpage.css";

const LandingPage: React.FC = () => {
  return (
    <section className="landing-page" id="home">
      <div className="landing-content1">
        <h1 className="landing-title1">&lt;Hi! I'm Vince&gt;</h1>
        <p className="landing-subtitle1">
          Looking for someone to collaborate and work with? I'm your guy!
          <br></br> You can reach me through the contact form below or through
          my social media accounts.
        </p>
      </div>

      <div className="landing-content2">
        <img src="/pixel giratina no bg.png" alt="Chibi Giratina" />
      </div>

      <div className="landing-content3">
        <h1 className="landing-title3">&lt;developer&gt;</h1>
        <p className="landing-subtitle3">
          I’m an aspiring game developer and designer that also excels at{" "}
          <br></br> web development and other
          <br></br>
          multimedia software.
        </p>
      </div>
    </section>
  );
};

export default LandingPage;
