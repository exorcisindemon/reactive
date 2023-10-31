import { TbUserCircle } from "react-icons/tb";
import LBubbleAccount from "../button/lBubbleAccount";

const LBubble = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-col flex-wrap w-full gap-4 mt-0">
        <LBubbleAccount href="/" icon={<TbUserCircle />} desc={"Ras"} />
        <LBubbleAccount href="/" icon={<TbUserCircle />} desc={"Dione"} />
        <LBubbleAccount href="/" icon={<TbUserCircle />} desc={"Rhea"} />
      </div>
      <div className="flex flex-col flex-wrap w-full gap-4 mt-8">
        <LBubbleAccount href="/" icon={<TbUserCircle />} desc={"Erriapus"} />
        <LBubbleAccount href="/" icon={<TbUserCircle />} desc={"Anthe"} />
        <LBubbleAccount href="/" icon={<TbUserCircle />} desc={"Creator"} />
      </div>
      <div className="flex flex-col flex-wrap w-full gap-4 mt-8">
        <LBubbleAccount href="/" icon={<TbUserCircle />} desc={"Creator"} />
        <LBubbleAccount href="/" icon={<TbUserCircle />} desc={"Creator"} />
        <LBubbleAccount href="/" icon={<TbUserCircle />} desc={"Creator"} />
      </div>
    </div>
  );
};

export default LBubble;
