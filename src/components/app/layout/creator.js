import ResizeableContent from "./content/resizeableContent";

const Creator = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start w-full lg:w-[60%]">
      <div className="flex flex-col lg:flex-row flex-wrap justify-center w-full p-8 lg:p-16 gap-8 overflow-y-auto">
        <ResizeableContent
          caption={
            "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him."
          }
        />
      </div>
    </div>
  );
};

export default Creator;
