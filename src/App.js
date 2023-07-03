import "./App.css";
import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import FirstLine from "./components/fisrtLine";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <div className="navigation">
        <div>
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: -200 }}
            transition={{ type: "tween", duration: 3 }}
          >
            <Navbar />
          </motion.div>
        </div>
        <div className="other">
          <FirstLine />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <div>
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: -50 }}
              transition={{ duration: 3 }}
            >
              <Footer />
            </motion.div>
          </div>
        </div>
        <div></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
