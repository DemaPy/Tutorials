import { useEffect, useState } from "react";
import Fractal from "./Fractal";
import Square from "./Square";
import Heading from "./Heading";
import { useSpring } from "framer-motion";

const App = () => {
  const spring = {
    stiffness: 500,
    damping: 100,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mousePosition2 = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  useEffect(() => {
    window.addEventListener("mousemove", (ev) => {
      const clientX = ev.clientX - (window.innerWidth / 2) * 0.25;
      const clientY = ev.clientY - (window.innerWidth / 2) * 0.25;
      mousePosition.x.set(clientX);
      mousePosition2.x.set(clientX + 100);

      mousePosition.y.set(clientY);
      mousePosition2.y.set(clientY + 100);
    });
  }, []);

  return (
    <main style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Heading title="Fractal style" subtitle="- tutorial " />
      <Square
        top={mousePosition2.y}
        left={mousePosition2.x}
        gradient={"linear-gradient(to right, #a8c0ff, #3f2b96)"}
      />
      <Square
        top={mousePosition.y}
        left={mousePosition.x}
        gradient={"linear-gradient(to right, #ff512f, #f09819)"}
      />
      <Fractal />
    </main>
  );
};

export default App;
