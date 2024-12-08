import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";

import myimage from "./assets/images/thiha.jpg";
import html from "./assets/html5.png";
import css from "./assets/css.png";
import js from "./assets/javaScript.png";
import react from "./assets/react.png";
import pc from "./assets/images/pc.png";

export default function Hero() {
  return (
    <section className="container d-block">
      <div className="row">
        <div
          className="col-md-6 mb-0 d-flex justify-content-center flex-column align-items-md-start align-items-center"
          id="hero"
        >
          <h4>Hi, I'm Thiha Zaw</h4>
          <h2>Front-End Developer</h2>
          <p>Reponsive Web Design</p>
          <div className="d-flex justify-content-center">
            <span className="mx-1">
              <img
                src={html}
                alt="html"
                width={31}
                className="align-items-start"
              />
            </span>
            <span className="mx-1">
              <img
                src={css}
                alt="css"
                width={30}
                className="align-items-start"
              />
            </span>
            <span className="mx-1">
              <img
                src={js}
                alt="JavaScript"
                width={30}
                className="align-items-start"
              />
            </span>
            <span className="mx-1">
              <FontAwesomeIcon
                icon={faBootstrap}
                size="2xl"
                className="text-primary"
              />
            </span>
            <span className="mx-1">
              <img
                src={react}
                alt="React"
                width={30}
                className="align-items-start"
              />
            </span>
          </div>
          <div className="mt-3">
            <a className="mx-2" href="#">
              <i class="bi bi-linkedin text-primary fs-5"></i>
            </a>
            <a className="mx-2" href="https://github.com/ThihaZaw55/">
              <i class="bi bi-github text-black fs-5"></i>
            </a>
          </div>
          <div className="mt-3">
            <button className="btn btn-dark me-4">Projects</button>
            <button className="btn btn-dark">Contact</button>
          </div>
        </div>

        <div className="col-md-6 mt-0 d-flex justify-content-center flex-column align-items-center">
          <img
            src={pc}
            className="rounded"
            alt="Html,Js,Java,PHP"
            width={400}
          />
        </div>
      </div>
    </section>
  );
}
