import React from "react";

const SelectedMenu = ({ href, task, icon, desc }) => {
  return (
    <a
      href={href}
      onClick={task}
      className="bg-blue-600 flex flex-row gap-2 items-center px-4 py-2 w-full text-white font-medium text-sm ring-1 ring-blue-600 rounded-full transition-all hover:bg-blue-800"
    >
      {icon}
      {desc}
    </a>
  );
};

export default SelectedMenu;
