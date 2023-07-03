import React from "react";
import { motion } from "framer-motion";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <div className="box-1">
        <div className="row align-items-center">
          <div className="col-md-6">
            <motion.img
              animate={{ rotate: 180 }}
              transition={{ type: "tween", duration: 3 }}
              whileHover={{ scale: 1.05 }}
              src={process.env.PUBLIC_URL + "./images/profile.jpg"}
              alt="Profile Pic"
              className="profile-pic"
            />
          </div>
          <div className="col-md-6">
            <motion.div
              className="home-content"
              animate={{ y: -0 }}
              initial={{ y: 100 }}
              transition={{ type: "tween", duration: 3 }}
            >
              <h2 className="h1-line">Hi, I Am Your UI Developer</h2>
              <h4>Web Designer. Web Developer. UI/UX Expert.</h4>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="container-s">
          <motion.div className="box-text" whileHover={{ scale: 1.1 }}>
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: 100 }}
              transition={{ duration: 3 }}
            >
              <p>
                As a portfolio, I showcase my skills as a technology and product
                enthusiast with a focus on Developing Rich Web Applications, and
                Web Services using Technologies like HTML, CSS, JavaScript,
                Bootstrap, Typescript, Angular, React, React Native, Java, AWS.
                Actively collaborated with teams in ongoing development.
              </p>
              <p>
                I have actively collaborated with teams on various ongoing
                development projects. I enjoy taking on challenging paths as a
                developer, as they provide exponential opportunities to learn
                and grow. My career growth has been driven by tackling these
                challenges head-on and developing effective, robust, and
                scalable solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
