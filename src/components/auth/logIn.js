import VersionControl from "../../utility/versionControl";
import PrimaryLightButton from "../button/primaryLightButton";
import SecondaryLightButton from "../button/secondaryLightButton";
import XSLinkLightButton from "../button/xsLinkLightButton";
import { TbArrowLeft, TbLogin, TbMail, TbKey } from "react-icons/tb";

const LogIn = () => {
  return (
    <div className="flex flex-col justify-start w-full h-full lg:h-screen p-8 lg:p-16">
      <VersionControl />
      <div className="flex flex-col h-full items-start lg:items-center justify-start lg:justify-center mt-8 lg:mt-0">
        <a
          href="/"
          className="flex flex-row gap-2 items-center text-black font-bold text-2xl lg:text-4xl mt-0 transition-all hover:text-blue-600"
        >
          <TbArrowLeft />
          Log In to Your Account
        </a>
        <h3 className="w-full lg:w-[40%] text-zinc-600 text-start lg:text-center font-medium text-sm lg:text-lg mt-8">
          Join the Community - Unlock a World of Possibilities with a Single
          Log In!
        </h3>
        <form className="flex flex-col lg:flex-row flex-wrap w-full items-center justify-start lg:justify-center gap-4 mt-8">
          <input
            className="w-full lg:w-80 ring-1 ring-zinc-200 px-4 py-2 text-black font-medium text-sm rounded-full transition-all hover:ring-blue-600"
            type="text"
            placeholder="Email / Username"
          />
          <input
            className="w-full lg:w-80 ring-1 ring-zinc-200 px-4 py-2 text-black font-medium text-sm rounded-full transition-all hover:ring-blue-600"
            type="password"
            placeholder="Password"
          />
          <PrimaryLightButton href="/app" icon={<TbLogin />} desc={"Log In"} />
        </form>
        <h6 className="w-full lg:w-[40%] text-zinc-600 text-start lg:text-center font-medium text-xs mt-8">
          <XSLinkLightButton href="/" desc={"Learn more"} /> about your all your
          data stored to.
        </h6>
        <div className="mt-8">
          <hr width="240" />
        </div>
        <h6 className="w-full lg:w-[40%] text-zinc-600 text-start lg:text-center font-medium text-xs mt-8">
          Haven't create an account yet? Or maybe you've lost your account
          before?
        </h6>
        <div className="flex flex-row flex-wrap gap-4 mt-8">
          <PrimaryLightButton
            href="/auth/regis"
            icon={<TbMail />}
            desc={"Register using Email"}
          />
          <SecondaryLightButton
            href="/auth/recover"
            icon={<TbKey />}
            desc={"Recover Account"}
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
