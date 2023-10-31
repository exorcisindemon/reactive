import PrimaryLightButton from "../button/primaryLightButton";
import SecondaryLightButton from "../button/secondaryLightButton";
import XSLinkLightButton from "../button/xsLinkLightButton";
import {
  TbArrowLeft,
  TbMail,
  TbBrandGoogle,
  TbBrandApple,
  TbLogin,
  TbKey,
} from "react-icons/tb";

const Feature = () => {
  return (
    <div className="flex flex-col justify-start w-full lg:w-[70%] p-8 lg:p-16">
      <div className="flex flex-row justify-between">
        <h6 className="text-zinc-400 font-medium text-xs mt-0">
          Reactive 2023
        </h6>
        <h6 className="text-zinc-400 font-medium text-xs mt-0">
          1.00.200(A) - 31 September, 2023
        </h6>
      </div>
      <div className="mt-8">
        <a
          href="/"
          className="flex flex-row gap-2 items-center text-black font-bold text-2xl lg:text-4xl mt-0 transition-all hover:text-blue-600"
        >
          <TbArrowLeft />
          Feature
        </a>
        <h3 className="w-full lg:w-[40%] text-zinc-600 font-medium text-sm lg:text-lg mt-8">
          Join the Community - Unlock a World of Possibilities with a Single
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
          <PrimaryLightButton href="/" icon={<TbLogin />} desc={"Log in"} />
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

export default Feature;
