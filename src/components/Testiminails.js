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
                I'm a MERN stack developer with 3.5 years of experience at
                IDesign.market PVT. LTD.
              </p>
            </div>
          </div>
        </div>
        <Swiper {...sliderProps.testimonial}>
          {/* testimonials */}
          <SwiperSlide className="testimonial-col-01">
            <div className="media">
              <div className="img">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*U4gZLnRtHEeJuc6tdVLwPw.png"
                  alt="image"
                />
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
                <img
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*U4gZLnRtHEeJuc6tdVLwPw.png"
                  alt="image"
                />
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
                  <span>08/2021 - 10/2024</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="owl-dots"></div>
        </Swiper>
      </div>
    </section>
  );
};
export default Testiminails;
