import React from "react";

const Social = ({ href, Icon }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      by
      <div
        style={{
          width: "20px",
          height: "20px",
        }}
      >
        <a href={href} target="_blank">
          <Icon />
        </a>
      </div>
      {href}
    </div>
  );
};

export default Social;
