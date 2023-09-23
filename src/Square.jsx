import { motion } from "framer-motion";

const Square = ({ gradient, top, left }) => {
  return (
    <motion.div
      style={{
        borderRadius: "10px",
        filter: "contrast(130%)",
        top: top,
        left: left,
        position: "absolute",
        zIndex: -10,
        width: "40vh",
        aspectRatio: "1",
        backgroundImage: gradient,
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          filter: "contrast(130%) blur(60px)",
          opacity: .5,
          top: top,
          left: left,
          position: "absolute",
          zIndex: -10,
          width: "40vh",
          aspectRatio: "1",
          backgroundImage: gradient,
        }}
      ></div>
    </motion.div>
  );
};

export default Square;
