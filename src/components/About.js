const About = () => {
  return (
    <section id="about" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">ABOUT ME</h3>
              <p className="text-uppercase small">
                I'm a MERN stack developer with 3 years of experience at GYPRC
                PVT. LTD.
                {/* A Lead UX &amp; UI designer based in Canada */}
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me-img box-shadow">
              <img src="static/img/Sandeep.jpg" alt="image" />
              <div className="nav social-icon">
                {/* <a href="#">
                  <i className="fab fa-facebook-f" />
                </a> */}
                <a href="https://github.com/sandee2847">
                  <i className="fab fa-github" />
                </a>
                {/* <a href="#">
                  <i className="fab fa-instagram" />
                </a> */}
                <a href="https://www.linkedin.com/in/sandeepsharma2847/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-15px-tb">
            <div className="about-me">
              <h4>I'M Sandeep Sharma</h4>
              <h6>
                <span className="theme-color">Mern Stack</span> Developer,
                working in <span className="theme-color">GYPRC Pvt. Ltd.</span>
              </h6>
              <p>
                Experienced MERN stack developer with a strong background in
                building scalable web applications. Skilled in MongoDB,
                Express.js, React, and Node.js to create efficient and dynamic
                solutions. Adept at problem-solving and delivering high-quality
                code in fast-paced environments.
              </p>
              <div className="row about-list">
                {/* <div className="col-md-6">
                  <div className="media">
                    <label>Birthday</label>
                    <p>4th april 1991</p>
                  </div>
                  <div className="media">
                    <label>Age</label>
                    <p>22 Yr</p>
                  </div>
                  <div className="media">
                    <label>Residence</label>
                    <p>Canada</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>California, USA</p>
                  </div>
                </div> */}
                <div className="col-md-6">
                  <div className="media">
                    <label>E-mail</label>
                    <p>fugiganiyar14@gmail.com</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>9466452847</p>
                  </div>
                  <div className="media">
                    <label>Address</label>
                    <p>Uttam Nagar, New Delhi</p>
                  </div>
                  <div className="media">
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div className="btn-bar">
                <a
                  className="m-btn m-btn-theme"
                  href="https://docs.google.com/document/d/1zT9sTqI0La0b3eODLNyWtwv3jUtRfSw9sLEevqUUwbg/edit?usp=sharing"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
