import { TbUserCircle } from "react-icons/tb";

const ResizeableContent = ({ username, location, caption, date, device }) => {
  return (
    <main className="bg-white flex flex-col w-full lg:w-[480px] h-[640px] p-8 rounded-2xl transition-all hover:shadow-2xl hover:shadow-zinc-200">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="p-4 ring-1 ring-zinc-200 rounded-full">
          <TbUserCircle />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-black font-medium text-sm mt-0">{username}</p>
          <p className="text-zinc-600 font-normal text-xs mt-0">{location}</p>
        </div>
      </div>
      <div className="bg-zinc-200 flex flex-col w-full h-full p-4 lg:p-8 rounded-2xl mt-8 transition-all hover:shadow-2xl hover:shadow-zinc-200 hover:scale-110">
        &resizeableContent
      </div>
      <p className="text-zinc-600 font-normal text-xs mt-8">{caption}</p>
      <p className="text-black font-normal text-xs mt-8">
        <span className="text-blue-600">{date}</span> from {device}
      </p>
    </main>
  );
};

export default ResizeableContent;
