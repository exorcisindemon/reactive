import { TbMusic, TbSettings, TbUserCircle } from "react-icons/tb";

const CreatorListeningTo = () => {
  return (
    <div className="bg-white flex flex-col w-full h-fit rounded-2xl ring-1 ring-zinc-200 px-4 lg:px-16 py-4 lg:py-16">
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="text-4xl flex flex-row items-center justify-start gap-4">
          <TbMusic />
          <div className="flex flex-col items-start">
            <p className="text-black font-medium text-lg mt-0">Title</p>
            <p className="text-zinc-600 font-normal text-sm mt-0">Artist</p>
          </div>
        </div>
        <button className="flex flex-row items-center gap-2 ring-1 ring-zinc-200 px-4 py-2 rounded-full transition-all hover:bg-zinc-200">
          <TbSettings />
          <p className="text-black font-medium text-sm mt-0">Settings</p>
        </button>
      </div>
    </div>
  );
};

export default CreatorListeningTo;
