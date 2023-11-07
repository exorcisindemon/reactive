import React from "react";

const Bubble = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start w-full h-full lg:w-[60%]">
      <div className="flex flex-col lg:flex-row flex-wrap justify-center w-full p-8 lg:p-16 gap-8 overflow-y-auto">
        Bubble Content
      </div>
    </div>
  );
};

export default Bubble;
