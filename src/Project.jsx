import clinic from "./assets/images/clinic.png";
import clinic1 from "./assets/images/clinic1.png";
import clinic2 from "./assets/images/clinic2.png";
import clinic3 from "./assets/images/clinic3.png";
import mobile from "./assets/images/mobile.png";

import kmd from "./assets/images/kmd.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";

import html from "./assets/html5.png";
import css from "./assets/css.png";
import js from "./assets/javaScript.png";
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
    <section className="container-fluid d-block bg-dark mt-5 text-white">
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
            <a href="">
              <div className="card">
                <div className="card-img-top">
                  <img src={clinic} alt="" className="img-fluid rounded-4" />
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
            </a>
          </div>
        </div>
        {/* Clinic */}
      </div>
      <div className="container mt-5">
        <div className="card">
          <div className="row">
            <div className="col-6">
              <div className="card-text">
                <h1>Aesthethic Clinic Project</h1>
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
            <div className="col-6">
              <div className="card-image">
                <img src={clinic} alt="" width={400} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="card d-flex justify-content-between">
          <div className="card-body">
            <h1 className="card-text">Aesthethic Clinic Project</h1>
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

          <div className="card-image">
            <img src={clinic} alt="" width={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
