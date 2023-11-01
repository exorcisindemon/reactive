import ResizeableContent from "./content/resizeableContent";

const Art = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start w-full lg:w-[60%]">
      <div className="flex flex-col lg:flex-row flex-wrap justify-center w-full p-8 lg:p-16 gap-8 overflow-y-auto">
        <ResizeableContent
          caption={
            "No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him."
          }
        />
        <ResizeableContent
          caption={
            "No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks."
          }
        />
        <ResizeableContent caption={"Everyone has the right to an effective remedy by the competent national tribunals for acts violating the fundamental rights granted him by the constitution or by law."} />
        <ResizeableContent caption={"Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance."} />
        <ResizeableContent caption={"Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers. Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay."}/>
        <ResizeableContent caption={"no caption"}/>
        <ResizeableContent caption={"no caption"}/>
        <ResizeableContent caption={"no caption"}/>
        <ResizeableContent caption={"no caption"}/>
      </div>
    </div>
  );
};

export default Art;
