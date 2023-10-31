import VersionControl from "../../utility/versionControl";
import PrimaryLightButton from "../button/primaryLightButton";
import SecondaryLightButton from "../button/secondaryLightButton";
import XSLinkLightButton from "../button/xsLinkLightButton";
import {
  TbMail,
  TbBrandGoogle,
  TbBrandApple,
  TbLogin,
  TbKey,
} from "react-icons/tb";

const LogInMethod = () => {
  return (
    <div className="flex flex-col justify-between w-full lg:w-[70%] p-8 lg:p-16">
      <VersionControl />
      <div>
        <h2 className="text-black font-bold text-2xl lg:text-4xl mt-0">
          Log In
        </h2>
        <h3 className="w-full lg:w-[40%] text-zinc-600 font-medium text-sm lg:text-lg mt-8">
          Join the Community - Unlock a World of Possibilities with a Single
          Login!
        </h3>
        <div className="flex flex-col flex-wrap gap-4 mt-8">
          <PrimaryLightButton
            href="/auth/regis"
            icon={<TbMail />}
            desc={"Register using Email"}
          />
          <SecondaryLightButton
            href="/"
            icon={<TbBrandGoogle />}
            desc={"Register using Google"}
          />
          <SecondaryLightButton
            href="/"
            icon={<TbBrandApple />}
            desc={"Register using Apple"}
          />
        </div>
        <h6 className="w-full lg:w-[40%] text-zinc-600 font-medium text-xs mt-8">
          <XSLinkLightButton href="/" desc={"Learn more"} /> about registering
          with your email, we'll guide you through a quick and easy form to
          complete the signup process. Your information is safe with us!
        </h6>
        <div className="mt-8">
          <hr width="240" />
        </div>
        <h6 className="w-full lg:w-[40%] text-zinc-600 font-medium text-xs mt-8">
          Welcome back! If you've already signed up, simply log in to your
          existing account.
        </h6>
        <div className="flex flex-row flex-wrap gap-4 mt-8">
          <PrimaryLightButton href="/auth/login" icon={<TbLogin />} desc={"Log In"} />
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

export default LogInMethod;
