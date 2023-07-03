import "./firstline.css";
import { motion } from "framer-motion";

function FirstLine() {
  return (
    <div>
      <div className="firstline-container">
        <div className="row">
          <div className="col text-center firstline">
            <motion.h1
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ duration: 3 }}
            >
              Madan Mohan - Portfolio Website
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstLine;
