import { TbUserCircle } from "react-icons/tb";

const ResizeableContent = () => {
  return (
    <main className="bg-white flex flex-col w-full lg:w-[480px] h-auto lg:h-[480px] p-8 rounded-2xl">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="p-4 ring-1 ring-zinc-200 rounded-full">
          <TbUserCircle />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-black font-medium text-sm">sievl</p>
          <p className="text-black font-normal text-xs">
            Semarang, Central Java, Indonesia
          </p>
        </div>
      </div>
      <div className="bg-zinc-200 flex flex-col w-full h-full p-4 lg:p-8 rounded-2xl mt-8"></div>
    </main>
  );
};

export default ResizeableContent;
