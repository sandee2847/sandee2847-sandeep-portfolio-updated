import { useEffect } from "react";
import { Sandeep } from "../layouts/utils";

const Skills = () => {
  useEffect(() => {
    Sandeep.activeSkillProgress();
  }, []);
  return (
    <section className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Skills</h3>
              <p className="text-uppercase small">
                I'm a MERN stack developer with 3.5 years of experience at
                IDesign.market PVT. LTD.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div
            style={{ gap: "2rem" }}
            className="col-lg-6 flex-wrap flex-lg-nowrap d-flex m-15px-tb"
          >
            {/* skill */}
            <div className="col-lg-6 col-12">
              <div className="skill-lt">
                <h6 className="dark-color">HTML5</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={92}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>92%</span>
                  </div>
                </div>
              </div>
              {/* end skill */}
              {/* skill */}
              <div className="skill-lt">
                <h6 className="dark-color">CSS3</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>90%</span>
                  </div>
                </div>
              </div>
              {/* end skill */}
              {/* skill */}
              <div className="skill-lt">
                <h6 className="dark-color">JavaScript</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>93%</span>
                  </div>
                </div>
              </div>
              {/* /skill */}
              {/* end skill */}
              {/* skill */}
              <div className="skill-lt">
                <h6 className="dark-color">TypeScript</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>60%</span>
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6 className="dark-color">React Js</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={89}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>89%</span>
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6 className="dark-color">React Native</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={89}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>75%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="skill-lt">
                <h6 className="dark-color">Redux</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>80%</span>
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6 className="dark-color">Node Js</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>70%</span>
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6 className="dark-color">Express Js</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={72}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>72%</span>
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6 className="dark-color">MongoDB</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={68}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>68%</span>
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6 className="dark-color">Git</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={82}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>82%</span>
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6 className="dark-color">Github</h6>
                <div className="skill-bar">
                  <div
                    className="skill-bar-in theme-bg"
                    role="progressbar"
                    aria-valuenow={84}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span>84%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* end skill */}
          </div>
          <div className="col-lg-5 m-15px-tb">
            <div className="row">
              <div className="col-6 m-15 px-tb">
                <div className="feature-box-2 media align-items-center">
                  {/* <div className="icon">
                    <i className="fas fa-compact-disc" />
                  </div> */}
                  <div className="media-body">
                    <h5>Data Structures</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15 px-tb">
                <div className="feature-box-2 media align-items-center">
                  {/* <div className="icon">
                    <i className="fas fa-trophy" />
                  </div> */}
                  <div className="media-body">
                    <h5>Unit Testing</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  {/* <div className="icon">
                    <i className="fas fa-mug-hot" />
                  </div> */}
                  <div className="media-body">
                    <h5>Agile Methodologies</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  {/* <div className="icon">
                    <i className="fas fa-flag" />
                  </div> */}
                  <div className="media-body">
                    <h5>Postman</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  {/* <div className="icon">
                    <i className="fas fa-flag" />
                  </div> */}
                  <div className="media-body">
                    <h5>Swagger (Api's Documentation)</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  {/* <div className="icon">
                    <i className="fas fa-flag" />
                  </div> */}
                  <div className="media-body">
                    <h5>Eraser (Data Modelling)</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  {/* <div className="icon">
                    <i className="fas fa-flag" />
                  </div> */}
                  <div className="media-body">
                    <h5>Jira</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  {/* <div className="icon">
                    <i className="fas fa-flag" />
                  </div> */}
                  <div className="media-body">
                    <h5>Vs Code</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
