import CreatorBanner from "./content/creator/creatorBanner";
import CreatorListeningTo from "./content/creator/creatorListeningTo";

const Creator = () => {
  return (
    <div className="flex flex-col justify-start w-full h-full lg:w-[60%]">
      <div className="flex flex-col flex-wrap justify-center w-full p-8 lg:p-16 gap-8 overflow-y-auto">
        <CreatorBanner />
        <div className="flex flex-col lg:flex-row gap-8">
          <CreatorListeningTo />
          <CreatorListeningTo />
        </div>
      </div>
    </div>
  );
};

export default Creator;
