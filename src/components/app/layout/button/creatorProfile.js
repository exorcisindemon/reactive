import React from "react";

const CreatorProfile = ({ href, task, icon, name, username, mode }) => {
  return (
    <a
      href={href}
      onClick={task}
      className="flex flex-row gap-2 items-center px-4 py-8 w-full text-blue-600 ring-1 ring-zinc-200 rounded-2xl transition-all hover:bg-zinc-200"
    >
      <div className="flex flex-row gap-4 items-center text-4xl">
        {icon}
        <div className="flex flex-col gap-0 items-start">
          <div className="flex flex-row gap-2 items-center">
            <p className="font-semibold text-base">{name}</p>
            <p className="font-medium text-sm">(@{username})</p>
          </div>
          <p className="font-medium text-sm">{mode} Mode</p>
        </div>
      </div>
    </a>
  );
};

export default CreatorProfile;
