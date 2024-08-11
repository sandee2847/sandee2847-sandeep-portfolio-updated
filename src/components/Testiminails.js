import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";

const Testiminails = () => {
  return (
    <section id="testimonial" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">Experience</h3>
              <p className="text-uppercase small">
                I'm a MERN stack developer with 3 years of experience at GYPRC
                PVT. LTD.
              </p>
            </div>
          </div>
        </div>
        <Swiper {...sliderProps.testimonial}>
          {/* testimonials */}
          <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img src="static/img/team-1.jpg" alt="image" />
              </div>
              <div className="media-body p-25px-l">
                <p>
                  Worked as a computer operator, managing data entry and system
                  operations. Ensured efficient handling of tasks and maintained
                  system accuracy.
                </p>
                <div className="tc-info">
                  <h6 className="font-alt dark-color font-w-600">
                    Computer Operator (CCRI India Pvt. Ltd.)
                  </h6>
                  <span>01/2020 - 01/2021</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          {/* testimonials */}
          <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img src="static/img/team-2.jpg" alt="image" />
              </div>
              <div className="media-body p-25px-l">
                <p>
                  Transitioned to a software engineer role, developing and
                  managing complex software solutions with a focus on innovation
                  and efficiency.
                </p>
                <div className="tc-info">
                  <h6 className="font-alt dark-color font-w-600">
                    Software Engineer (IDesign.market)
                  </h6>
                  <span>08/2021 - 06/2024</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          {/* testimonials */}
          <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img src="static/img/team-3.jpg" alt="image" />
              </div>
              <div className="media-body p-25px-l">
                <p>
                  Working as a MERN stack developer, specializing in building
                  scalable web applications with MongoDB, Express.js, React, and
                  Node.js.
                </p>
                <div className="tc-info">
                  <h6 className="font-alt dark-color font-w-600">
                    Mern Stack Developer (GYPRC Pvt. Ltd.)
                  </h6>
                  <span>06/2023 - Present</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* / */}
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </section>
  );
};
export default Testiminails;
