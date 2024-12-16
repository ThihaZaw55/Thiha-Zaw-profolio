import myphoto from "./assets/images/cv.jpg";
import diploma from "./assets/images/diploma.jpg";
import fcc from "./assets/images/responsive-web-design.png";
import js from "./assets/images/JavaScript.jpg";
import wd from "./assets/images/Web Development.jpg";
import Card from "./conponents/CertificateCard";

export default function About() {
  return (
    <section
      className="container-fluid d-block bg-dark py-4 text-white"
      id="about"
    >
      <div className="container">
        <h1 className="text-center text-dark" id="project-title">
          About me
        </h1>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <figure className="p-2 bg-light rounded-4">
              <img
                src={myphoto}
                className="rounded-4"
                alt="thihazaw"
                width={300}
              />
            </figure>
          </div>
          <div className="col-md-6 d-flex align-items-center mt-5 mt-md-0">
            <p className="fs-5 text-light ms-md-0 ms-5">
              Hi, My name is Thiha Zaw.
              <br />I am 24. I am Single.
              <br />I learned Diploma in Web Development.
              <br />I studied HTML5, CSS3, JavaScript, jQuery, Bootstrap and
              React for front-end and PHP for back-end with mySQL.
              <br />I learned git and github.
              <br />I learned gsap for animation.
              <br />I can create Reponsive Web Design.
              <br />I can create Dynamic Web Design.
            </p>
          </div>
        </div>
        <div className="container mt-5">
          <h1 className="text-center">Certification</h1>
          <div className="row g-5 mt-4">
            <div className="col-md-6">
              <Card img={diploma} title="Diploma in Web Developement" />
            </div>

            <div className="col-md-6">
              <Card img={fcc} title="Responsive Web Design" />
            </div>

            <div className="col-md-6">
              <Card img={js} title="JavaScript Intermediate" />
            </div>
            <div className="col-md-6">
              <Card img={wd} title="JavaScript Intermediate" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
