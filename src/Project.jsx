import clinic from "./assets/images/clinic.png";
import clinic1 from "./assets/images/clinic1.png";
import clinic2 from "./assets/images/clinic2.png";
import clinic3 from "./assets/images/clinic3.png";
import mobile from "./assets/images/mobile.png";
import paint from "./assets/images/SiThu House Paint.png";

import kmd from "./assets/images/kmd.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";

import html from "./assets/html5.png";
import css from "./assets/css.png";
import js from "./assets/javaScript.png";
import react from "./assets/react.png";
import php from "./assets/php.png";

export default function Projects() {
  const topBtn = document.getElementById("topBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function () {
  //   scrollTop();
  // };

  function scrollTop() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topBtn.Style.display = "block";
    } else {
      topBtn.Style.display = "none";
    }
  }
  function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <section
      className="container-fluid d-block bg-dark mt-5 text-white"
      id="project"
    >
      {/* <button onClick={goTop()} classNameName="btn btn-circle" id="topBtn">
        Top
      </button> */}
      <div className="container pt-4">
        <h1 className="text-center text-dark" id="project-title">
          Projects
        </h1>

        {/* Clinic */}
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="card">
              <h1 className="card-text text-center py-3">
                BeautyCare Aesthetics Clinic
              </h1>
              <div className="card-img-top">
                <a href="#" className="nav-link">
                  <img
                    src={clinic}
                    alt="BeautyCare Project"
                    className="img-fluid rounded-4"
                  />
                </a>
              </div>

              <div className="card-body d-flex mt-2">
                <p className="btn me-3">
                  <img src={html} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <img src={css} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <img src={js} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    size="2xl"
                    className="text-primary"
                  />
                </p>
                <p className="btn me-3">
                  <img src={php} alt="" width={28} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="card">
              <h1 className="card-text text-center py-3">SiThu House Paint</h1>
              <div className="card-img-top">
                <a href="#" className="nav-link">
                  <img src={paint} alt="" className="img-fluid rounded-4" />
                </a>
              </div>

              <div className="card-body d-flex mt-2">
                <p className="btn me-3">
                  <img src={html} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <img src={css} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <img src={js} alt="" width={28} />
                </p>
                <p className="btn me-3">
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    size="2xl"
                    className="text-primary"
                  />
                </p>
                <p className="btn me-3">
                  <img src={react} alt="" width={28} />
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Clinic */}
      </div>
    </section>
  );
}
