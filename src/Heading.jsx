import React from "react";
import Social from "./Social";
import Github from "./Github";

const Heading = ({ title, subtitle }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: 20,
        top: 20,
      }}
    >
      <h1
        style={{
          color: "whitesmoke",
          fontWeight: "700",
          fontSize: "60px",
          lineHeight: "1",
          margin: 0,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          margin: 0,
          color: "whitesmoke",
          fontSize: "20px",
          lineHeight: "1",
          fontWeight: "200",
        }}
      >
        <Social href={"DemaPy"} Icon={Github}></Social>
      </p>
      <div style={{ marginTop: '12px' }}>
      </div>
    </div>
  );
};

export default Heading;
