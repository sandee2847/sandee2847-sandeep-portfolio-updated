import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import { Sandeep } from "@/src/layouts/utils";
import { Fragment, useEffect, useState } from "react";

import Services from "@/src/components/Services";
import TypingAnimation from "@/src/components/TypingAnimation";
import Footer from "@/src/layouts/Footer";

const Index1 = () => {
  useEffect(() => {
    Sandeep.scrollToActiveNav();
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a className="logo-text" href="index.html">
              Sandeep
            </a>
          </div>
          <button className="toggler-menu" onClick={() => setToggle(!toggle)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <header
        className={`header-left ${toggle ? "menu-open menu-open-desk" : ""}`}
        id="navbar-collapse-toggle"
      >
        <div className="navbar-brand">
          <a className="logo-text" href="index.html">
            Sandeep
          </a>
        </div>
        <ul className="nav nav-ul">
          <li>
            <a className="nav-link" href="#home">
              <i className="fas fa-house-damage" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              <i className="far fa-address-card" />
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#services">
              <i className="fas fa-concierge-bell" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#testimonial">
              <i className="fas fa-briefcase" />
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#blog">
              <i className="fas fa-blog" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contactus">
              <i className="fas fa-id-card-alt" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </header>

      <main className="main-left">
        {/* Home Banner */}
        <section
          id="home"
          className="home-banner-01 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(static/img/sandeep1.jpg)" }}
        >
          <div className="container">
            <div className="row full-screen align-items-center p-100px-tb">
              <div className="col-md-6">
                <div className="ht-text">
                  <h6>Hello there...</h6>
                  <h1>Sandeep Sharma</h1>
                  <h2>
                    I Am Passionate <TypingAnimation />
                  </h2>
                  <p>
                    <b>MERN stack developer</b> with 3.5 years of experience
                    specializing in building and maintaining robust web
                    applications using MongoDB, Express, React, React Native, and Node.js.
                    Skilled in Agile methodology, proficient in creating complex
                    features such as Gantt charts and advanced file management
                    systems, and experienced in freelancing and collaborative
                    environments. Dedicated to delivering high-quality, scalable
                    solutions
                  </p>
                  <div className="btn-bar go-to">
                    <a className="m-btn m-btn-theme" href="#blog">
                      my work
                    </a>
                    <a className="m-btn m-btn-t-theme" href="#contactus">
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="go-to go-to-next">
            <a href="#about">
              <span />
            </a>
          </div>
        </section>
        {/* End Home Banner */}

        {/* End Home Banner */}
        {/* about us */}
        <About />
        {/* end about us */}
        {/* fun */}
        <Skills />
        {/* End fun */}
        {/* resume */}
        <Services />
        {/* End resume */}
        {/* Testiminails */}
        <Testiminails />
        {/* End Testiminails */}
        {/* Blog */}
        <Blog />
        {/* End Blog */}
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};
export default Index1;
