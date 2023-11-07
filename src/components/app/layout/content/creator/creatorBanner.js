import { TbSettings, TbUserCircle } from "react-icons/tb";

const CreatorBanner = () => {
  return (
    <div className="bg-white flex flex-col w-full h-fit rounded-2xl ring-1 ring-zinc-200 px-4 lg:px-16 py-4 lg:py-16 transition-all hover:shadow-2xl hover:shadow-zinc-200">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="text-4xl flex flex-row items-center justify-start gap-4">
          <TbUserCircle />
          <div className="flex flex-col items-start">
            <p className="text-black font-medium text-lg mt-0">Ras</p>
            <p className="text-zinc-600 font-normal text-sm mt-0">
              Professional Account
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full lg:w-auto gap-4">
          <button className="flex flex-row items-center gap-2 ring-1 ring-zinc-200 px-4 py-2 rounded-full transition-all hover:bg-zinc-200">
            <TbSettings />
            <p className="text-black font-medium text-sm mt-0">Edit Profile</p>
          </button>
          <button className="flex flex-row items-center gap-2 ring-1 ring-zinc-200 px-4 py-2 rounded-full transition-all hover:bg-zinc-200">
            <TbSettings />
            <p className="text-black font-medium text-sm mt-0">Settings</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorBanner;
