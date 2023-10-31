import VersionControl from "../../utility/versionControl";
import PrimaryLightButton from "../button/primaryLightButton";
import SecondaryLightButton from "../button/secondaryLightButton";
import XSLinkLightButton from "../button/xsLinkLightButton";
import { TbArrowLeft, TbArrowRight, TbLogin, TbKey } from "react-icons/tb";

const Regis = () => {
  return (
    <div className="flex flex-col justify-start w-full h-full lg:h-screen p-8 lg:p-16">
      <VersionControl />
      <div className="flex flex-col h-full items-start lg:items-center justify-start lg:justify-center mt-8 lg:mt-0">
        <a
          href="/"
          className="flex flex-row gap-2 items-center text-black font-bold text-2xl lg:text-4xl mt-0 transition-all hover:text-blue-600"
        >
          <TbArrowLeft />
          Register using Email
        </a>
        <h3 className="w-full lg:w-[40%] text-zinc-600 text-start lg:text-center font-medium text-sm lg:text-lg mt-8">
          First step of creating your account. Hope to fill the forms below
          while we prepare the dashboard for you!
        </h3>
        <form className="flex flex-col lg:flex-row flex-wrap w-full items-center justify-start lg:justify-center gap-4 mt-8">
          <input
            className="w-full lg:w-80 ring-1 ring-zinc-200 px-4 py-2 text-black font-medium text-sm rounded-full transition-all hover:ring-blue-600"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full lg:w-80 ring-1 ring-zinc-200 px-4 py-2 text-black font-medium text-sm rounded-full transition-all hover:ring-blue-600"
            type="password"
            placeholder="Password"
          />
          <input
            className="w-full lg:w-80 ring-1 ring-zinc-200 px-4 py-2 text-black font-medium text-sm rounded-full transition-all hover:ring-blue-600"
            type="password"
            placeholder="Confirm Password"
          />
          <PrimaryLightButton href="/" icon={<TbArrowRight />} desc={"Next"} />
        </form>
        <h6 className="w-full lg:w-[40%] text-zinc-600 text-start lg:text-center font-medium text-xs mt-8">
          <XSLinkLightButton href="/" desc={"Learn more"} /> about registering
          with your email, we'll guide you through a quick and easy form to
          complete the signup process. Your information is safe with us!
        </h6>
        <div className="mt-8">
          <hr width="240" />
        </div>
        <h6 className="w-full lg:w-[40%] text-zinc-600 text-start lg:text-center font-medium text-xs mt-8">
          Welcome back! If you've already signed up, simply log in to your
          existing account.
        </h6>
        <div className="flex flex-row flex-wrap gap-4 mt-8">
          <PrimaryLightButton
            href="/auth/login"
            icon={<TbLogin />}
            desc={"Log In"}
          />
          <SecondaryLightButton
            href="/"
            icon={<TbKey />}
            desc={"Recover Account"}
          />
        </div>
      </div>
    </div>
  );
};

export default Regis;
