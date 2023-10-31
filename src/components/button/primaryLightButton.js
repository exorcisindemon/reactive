import React from "react";

const PrimaryLightButton = ({ href, icon, desc }) => {
  return (
    <a
      href={href}
      className="bg-blue-600 flex flex-row gap-2 items-center px-4 py-2 w-fit text-white font-medium text-sm ring-1 ring-zinc-200 rounded-full transition-all hover:bg-blue-400"
    >
      {icon}
      {desc}
    </a>
  );
};

export default PrimaryLightButton;
