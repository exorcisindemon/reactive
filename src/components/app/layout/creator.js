import CreatorBanner from "./content/creator/creatorBanner";
import CreatorListeningTo from "./content/creator/creatorListeningTo";

const Creator = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start w-full h-full lg:w-[60%]">
      <div className="flex flex-col lg:flex-row flex-wrap justify-center w-full p-8 lg:p-16 gap-8 overflow-y-auto">
        <CreatorBanner />
        <CreatorListeningTo />
      </div>
    </div>
  );
};

export default Creator;
