import { useState } from "react";
import SelectedMenu from "./layout/button/selectedMenu";
import NotSelectedMenu from "./layout/button/notSelectedMenu";
import {
  TbUserCircle,
  TbMessages,
  TbLayoutGrid,
  TbSearch,
  TbVideo,
  TbTextCaption,
  TbSettings,
  TbHelpCircle,
  TbLogout,
} from "react-icons/tb";

import CreatorProfile from "./layout/button/creatorProfile";
import Creator from "./layout/creator";
import Bubble from "./layout/bubble";
import Finder from "./layout/finder";
import Art from "./layout/art";
import Clips from "./layout/clips";
import Thread from "./layout/thread";
import Setting from "./layout/setting";
import HelpCenter from "./layout/helpCenter";
import LBubble from "./layout/content/lBubble";

const Menu = () => {
  const [activeComponent, setActiveComponent] = useState("Art");

  const handleMenuAccountModeCreator = (e) => {
    e.preventDefault();
    setActiveComponent("Creator");
  };

  const handleMenuAccountBubble = (e) => {
    e.preventDefault();
    setActiveComponent("Bubble");
  };

  const handleMenuTaskFinder = (e) => {
    e.preventDefault();
    setActiveComponent("Finder");
  };

  const handleMenuContentArt = (e) => {
    e.preventDefault();
    setActiveComponent("Art");
  };

  const handleMenuContentClips = (e) => {
    e.preventDefault();
    setActiveComponent("Clips");
  };

  const handleMenuContentThread = (e) => {
    e.preventDefault();
    setActiveComponent("Thread");
  };

  const handleMenuAppSetting = (e) => {
    e.preventDefault();
    setActiveComponent("Setting");
  };

  const handleMenuAppHelpCenter = (e) => {
    e.preventDefault();
    setActiveComponent("HelpCenter");
  };

  return (
    <main className="flex flex-col lg:flex-row w-full h-full lg:h-screen">
      <div className="bg-white flex flex-col justify-center w-full lg:w-[20%] p-8 lg:p-16">
        <div className="flex flex-col flex-wrap gap-4 mt-0 lg:mt-8">
          <CreatorProfile
            href="/"
            task={handleMenuAccountModeCreator}
            icon={<TbUserCircle />}
            name={"Ras"}
            username={"sievl"}
            mode={"Professional"}
          />
        </div>
        <div className="flex flex-col flex-wrap gap-4 mt-8">
          {activeComponent === "Bubble" ? (
            <SelectedMenu
              href="/"
              task={handleMenuAccountBubble}
              icon={<TbMessages />}
              desc={"Bubble"}
            />
          ) : (
            <NotSelectedMenu
              href="/"
              task={handleMenuAccountBubble}
              icon={<TbMessages />}
              desc={"Bubble"}
            />
          )}
        </div>
        <div className="flex flex-col flex-wrap gap-4 mt-8">
          {activeComponent === "Finder" ? (
            <SelectedMenu
              href="/"
              task={handleMenuTaskFinder}
              icon={<TbSearch />}
              desc={"Finder"}
            />
          ) : (
            <NotSelectedMenu
              href="/"
              task={handleMenuTaskFinder}
              icon={<TbSearch />}
              desc={"Finder"}
            />
          )}
        </div>
        <div className="flex flex-col flex-wrap gap-4 mt-8">
          {activeComponent === "Art" ? (
            <SelectedMenu
              href="/"
              task={handleMenuContentArt}
              icon={<TbLayoutGrid />}
              desc={"Art"}
            />
          ) : (
            <NotSelectedMenu
              href="/"
              task={handleMenuContentArt}
              icon={<TbLayoutGrid />}
              desc={"Art"}
            />
          )}
          {activeComponent === "Clips" ? (
            <SelectedMenu
              href="/"
              task={handleMenuContentClips}
              icon={<TbVideo />}
              desc={"Clips"}
            />
          ) : (
            <NotSelectedMenu
              href="/"
              task={handleMenuContentClips}
              icon={<TbVideo />}
              desc={"Clips"}
            />
          )}
          {activeComponent === "Thread" ? (
            <SelectedMenu
              href="/"
              task={handleMenuContentThread}
              icon={<TbTextCaption />}
              desc={"Thread"}
            />
          ) : (
            <NotSelectedMenu
              href="/"
              task={handleMenuContentThread}
              icon={<TbTextCaption />}
              desc={"Thread"}
            />
          )}
        </div>
        <div className="flex flex-col flex-wrap gap-4 mt-8">
          {activeComponent === "Setting" ? (
            <SelectedMenu
              href="/"
              task={handleMenuAppSetting}
              icon={<TbSettings />}
              desc={"Setting"}
            />
          ) : (
            <NotSelectedMenu
              href="/"
              task={handleMenuAppSetting}
              icon={<TbSettings />}
              desc={"Setting"}
            />
          )}
          {activeComponent === "HelpCenter" ? (
            <SelectedMenu
              href="/"
              task={handleMenuAppHelpCenter}
              icon={<TbHelpCircle />}
              desc={"Help Center"}
            />
          ) : (
            <NotSelectedMenu
              href="/"
              task={handleMenuAppHelpCenter}
              icon={<TbHelpCircle />}
              desc={"Help Center"}
            />
          )}
          <NotSelectedMenu href="/" icon={<TbLogout />} desc={"Log Out"} />
        </div>
      </div>
      {activeComponent === "Creator" && <Creator />}
      {activeComponent === "Bubble" && <Bubble />}
      {activeComponent === "Finder" && <Finder />}
      {activeComponent === "Art" && <Art />}
      {activeComponent === "Clips" && <Clips />}
      {activeComponent === "Thread" && <Thread />}
      {activeComponent === "Setting" && <Setting />}
      {activeComponent === "HelpCenter" && <HelpCenter />}
      <div className="bg-white hidden lg:flex flex-col justify-start w-full lg:w-[20%] p-8 lg:p-16">
        <LBubble />
      </div>
    </main>
  );
};

export default Menu;
