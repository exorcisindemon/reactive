import style from "./index.module.css";
import PrimaryLightButton from "../components/button/primaryLightButton";
import SecondaryLightButton from "../components/button/secondaryLightButton";
import XSLinkLightButton from "../components/button/xsLinkLightButton";
import {
  TbBulb,
  TbSortDescending2,
  TbAccessible,
  TbRefresh,
  TbRollercoaster,
} from "react-icons/tb";

import LoginMethod from "../components/auth/loginMethod";

const Index = () => {
  return (
    <main
      className={`${style.index} flex flex-col lg:flex-row w-full h-full lg:h-screen`}
    >
      <div className="bg-white flex flex-col justify-center w-full lg:w-[30%] p-8 lg:p-16">
        <h1 className="text-black font-bold text-2xl lg:text-4xl mt-0">
          Introducing "Reactive" - Where Your Social World Comes to Life!{" "}
        </h1>
        <h2 className="text-zinc-600 font-medium text-sm lg:text-lg mt-8">
          With Reactive, you can stay in sync with the latest trends, connect
          with friends and followers instantly, and experience the pulse of the
          digital world as it happens. Our cutting-edge technology ensures that
          your social media experience is as dynamic as your life, always ready
          to react to your preferences and interests.
        </h2>
        <div className="flex flex-row flex-wrap gap-4 mt-8">
          <PrimaryLightButton href="/" icon={<TbBulb />} desc={"Learn More"} />
          <SecondaryLightButton
            href="/"
            icon={<TbSortDescending2 />}
            desc={"Feature"}
          />
          <SecondaryLightButton
            href="/"
            icon={<TbAccessible />}
            desc={"Accessibility"}
          />
          <SecondaryLightButton
            href="/"
            icon={<TbRefresh />}
            desc={"Updates"}
          />
          <SecondaryLightButton
            href="/"
            icon={<TbRollercoaster />}
            desc={"Goals"}
          />
        </div>
        <h6 className="text-zinc-600 font-medium text-xs mt-8">
          By registering, you acknowledge your acceptance of the{" "}
          <XSLinkLightButton href="/" desc={"Terms of Service"} /> and{" "}
          <XSLinkLightButton href="/" desc={"Privacy Policy"} />, which
          encompasses our <XSLinkLightButton href="/" desc={"Cookie Use"} />.
        </h6>
      </div>
      <LoginMethod />
    </main>
  );
};

export default Index;
