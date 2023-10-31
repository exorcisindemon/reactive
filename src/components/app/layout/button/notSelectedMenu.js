import React from "react";

const NotSelectedMenu = ({ href, task, icon, desc }) => {
  return (
    <a
      href={href}
      onClick={task}
      className="bg-white flex flex-row gap-2 items-center px-4 py-2 w-full text-black font-medium text-sm ring-1 ring-zinc-200 rounded-full transition-all hover:bg-zinc-200"
    >
        {icon}
      {desc}
    </a>
  );
};

export default NotSelectedMenu;
