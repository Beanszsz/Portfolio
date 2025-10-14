import Navbar from "./components/navbar/navbar";
import LandingPage from "./components/landingpage/landingpage";
import AboutMe from "./components/aboutMe/aboutme";
import Skills from "./components/skills/skills";
import Project from "./components/Projects/project";
import Contact from "./components/hookup/contact";

export const metadata = (
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <LandingPage />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project title="" description="" image="" link="" />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
