import { useState } from "react";
import SelectedMenu from "./layout/button/selectedMenu";
import NotSelectedMenu from "./layout/button/notSelectedMenu";
import {
  TbUserCircle,
  TbUserHexagon,
  TbLayoutGrid,
  TbSearch,
  TbVideo,
  TbTextCaption,
  TbSettings,
  TbHelpCircle,
  TbLogout
} from "react-icons/tb";

import KeyFeatures from "../index/keyFeatures";
import Accessibility from "../index/accessibility";
import Updates from "../index/updates";
import Goals from "../index/goals";
import LearnMore from "../index/learnMore";
import Art from "./layout/art";

const Menu = () => {
  const [activeComponent, setActiveComponent] = useState("Art");

  const handleLearnMore = (e) => {
    e.preventDefault();
    setActiveComponent("LearnMore");
  };

  const handleFeature = (e) => {
    e.preventDefault();
    setActiveComponent("KeyFeatures");
  };

  const handleAccessibility = (e) => {
    e.preventDefault();
    setActiveComponent("Accessibility");
  };

  const handleUpdates = (e) => {
    e.preventDefault();
    setActiveComponent("Updates");
  };

  const handleGoals = (e) => {
    e.preventDefault();
    setActiveComponent("Goals");
  };

  return (
    <main className="flex flex-col lg:flex-row w-full h-full lg:h-screen">
      <div className="bg-white flex flex-col justify-center w-full lg:w-[20%] p-8 lg:p-16">
        <h1 className="text-black font-bold text-2xl lg:text-4xl mt-0">
          Reactive
        </h1>
        <div className="flex flex-col flex-wrap gap-4 mt-8">
          <NotSelectedMenu
            href="/"
            task={handleFeature}
            icon={<TbUserCircle />}
            desc={"Creator"}
          />
          <NotSelectedMenu
            href="/"
            task={handleFeature}
            icon={<TbUserHexagon />}
            desc={"Professional"}
          />
        </div>
        <div className="flex flex-col flex-wrap gap-4 mt-8">
          <SelectedMenu
            href="/"
            task={handleLearnMore}
            icon={<TbLayoutGrid />}
            desc={"Art"}
          />
          <NotSelectedMenu
            href="/"
            task={handleFeature}
            icon={<TbSearch />}
            desc={"Finder"}
          />
          <NotSelectedMenu
            href="/"
            task={handleAccessibility}
            icon={<TbVideo />}
            desc={"Clips"}
          />
          <NotSelectedMenu
            href="/"
            task={handleUpdates}
            icon={<TbTextCaption />}
            desc={"Thread"}
          />
        </div>
        <div className="flex flex-col flex-wrap gap-4 mt-8">
          <NotSelectedMenu
            href="/"
            task={handleFeature}
            icon={<TbSettings />}
            desc={"Setting"}
          />
          <NotSelectedMenu
            href="/"
            task={handleFeature}
            icon={<TbHelpCircle />}
            desc={"Help Center"}
          />
          <NotSelectedMenu
            href="/"
            task={handleFeature}
            icon={<TbLogout />}
            desc={"Log Out"}
          />
        </div>
      </div>
      {activeComponent === "Art" && <Art />}
      {activeComponent === "LearnMore" && <LearnMore />}
      {activeComponent === "KeyFeatures" && <KeyFeatures />}
      {activeComponent === "Accessibility" && <Accessibility />}
      {activeComponent === "Updates" && <Updates />}
      {activeComponent === "Goals" && <Goals />}
    </main>
  );
};

export default Menu;
