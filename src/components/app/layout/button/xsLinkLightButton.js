import React from "react";

const XSLinkLightButton = ({ href, desc }) => {
  return (
    <a href={href} className="text-blue-600 hover:underline">
      {desc}
    </a>
  );
};

export default XSLinkLightButton;
