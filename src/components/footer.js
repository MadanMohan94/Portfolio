import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer text-center text-lg-start text-white">
      <div className="footer-container p-4 pb-0">
        <section>
          <div className="row">
            <div className="col-lg-4 mx-auto mt-4">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Madan Mohan Portfolio
              </h6>
              <p>
                Thank you for visiting my portfolio! If you have any questions
                or would like to work together, feel free to reach out to me. I
                look forward to hearing from you.
              </p>
            </div>

            <div className="col-lg-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <Link to="./" className="text-white">
                  Home
                </Link>
              </p>
              <p>
                <Link to="./about" className="text-white">
                  About
                </Link>
              </p>
              <p>
                <Link to="./projects" className="text-white">
                  Projects
                </Link>
              </p>
            </div>

            <div className="col-lg-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i> Aberdeen, MD
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> mail2madan94@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +1 (703)-462-0905
              </p>
            </div>
          </div>
        </section>

        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © 2023 Copyright by :{" "}
                <a className="text-white" href="https://mdbootstrap.com/">
                  Madan Mohan
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
