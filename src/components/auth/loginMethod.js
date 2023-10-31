import PrimaryLightButton from "../button/primaryLightButton";
import SecondaryLightButton from "../button/secondaryLightButton";
import XSLinkLightButton from "../button/xsLinkLightButton";
import { TbMail, TbBrandGoogle, TbBrandApple, TbLogin, TbKey } from "react-icons/tb";

const LoginMethod = () => {
  return (
    <div className="flex flex-col justify-center w-full lg:w-[70%] p-8 lg:p-16">
      <h2 className="text-black font-bold text-2xl lg:text-4xl mt-0">Log in</h2>
      <h3 className="w-full lg:w-[40%] text-zinc-600 font-medium text-sm lg:text-lg mt-8">
        Join the Community – Unlock a World of Possibilities with a Single
        Login!
      </h3>
      <div className="flex flex-col flex-wrap gap-4 mt-8">
        <PrimaryLightButton
          href="/"
          icon={<TbMail />}
          desc={"Register with Email"}
        />
        <SecondaryLightButton
          href="/"
          icon={<TbBrandGoogle />}
          desc={"Register with Google"}
        />
        <SecondaryLightButton
          href="/"
          icon={<TbBrandApple />}
          desc={"Register with Apple"}
        />
      </div>
      <h6 className="w-full lg:w-[40%] text-zinc-600 font-medium text-xs mt-8">
        By registering, you acknowledge your acceptance of the{" "}
        <XSLinkLightButton href="/" desc={"Terms of Service"} /> and{" "}
        <XSLinkLightButton href="/" desc={"Privacy Policy"} />, which
        encompasses our <XSLinkLightButton href="/" desc={"Cookie Use"} />.
      </h6>
      <div className="mt-8">
        <hr width="240" />
      </div>
      <div className="flex flex-row flex-wrap gap-4 mt-8">
        <PrimaryLightButton
          href="/"
          icon={<TbLogin />}
          desc={"Log in"}
        />
        <SecondaryLightButton
          href="/"
          icon={<TbKey />}
          desc={"Recover Account"}
        />
      </div>
    </div>
  );
};

export default LoginMethod;
