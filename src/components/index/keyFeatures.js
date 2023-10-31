import VersionControl from "../../utility/versionControl";
import SecondaryLightButton from "../button/secondaryLightButton";
import {
  TbArrowLeft,
  TbAccessible,
  TbHelpCircle,
  TbStar,
} from "react-icons/tb";

const KeyFeatures = () => {
  return (
    <div className="flex flex-col justify-start w-full lg:w-[70%] p-8 lg:p-16">
      <VersionControl />
      <div className="mt-8 overflow-y-auto">
        <a
          href="/"
          className="flex flex-row gap-2 items-center text-black font-bold text-2xl lg:text-4xl mt-0 transition-all hover:text-blue-600"
        >
          <TbArrowLeft />
          Reactive Key Features
        </a>
        <h3 className="w-full lg:w-[40%] text-zinc-600 font-medium text-sm lg:text-lg mt-8">
          Reactive is a cutting-edge social media application that redefines the
          way people connect and engage in the digital world. It's designed to
          provide users with a dynamic and responsive social experience, making
          it stand out in the ever-evolving landscape of social networking. Key
          features of Reactive include:
        </h3>
        <div className="flex flex-col flex-wrap gap-8 mt-8">
          <div className="flex flex-col flex-wrap gap-4 w-full lg:w-[40%]">
            <h4 className="w-full text-blue-600 font-medium text-lg mt-0">
              Real-Time Interaction
            </h4>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              Users can engage with their friends and followers in real-time,
              ensuring that they are always connected to the latest updates and
              conversations.
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-4 w-full lg:w-[40%]">
            <h4 className="w-full text-blue-600 font-medium text-lg mt-0">
              Adaptive Content
            </h4>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              The app employs advanced algorithms to curate content based on a
              user's preferences and interactions. This results in a
              personalized and dynamic feed, so you see what matters most to
              you.
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-4 w-full lg:w-[40%]">
            <h4 className="w-full text-blue-600 font-medium text-lg mt-0">
              Vibrant Communities
            </h4>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              Reactive hosts a variety of communities where users can discover,
              join, and create groups based on their interests. This feature
              encourages like-minded individuals to connect and collaborate.
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-4 w-full lg:w-[40%]">
            <h4 className="w-full text-blue-600 font-medium text-lg mt-0">
              Privacy and Control
            </h4>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              User privacy is a top priority. Reactive provides comprehensive
              privacy settings, allowing users to determine who can view their
              content and engage with them.
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-4 w-full lg:w-[40%]">
            <h4 className="w-full text-blue-600 font-medium text-lg mt-0">
              Effortless Registration
            </h4>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              Whether users prefer to sign up with an email address or their
              existing social media accounts, Reactive offers a hassle-free and
              user-friendly registration process.
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-4 w-full lg:w-[40%]">
            <h4 className="w-full text-blue-600 font-medium text-lg mt-0">
              Cross-Platform Compatibility
            </h4>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              Reactive is accessible across different devices, ensuring a
              consistent and seamless user experience on mobile, desktop, and
              web platforms.
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-4 w-full lg:w-[40%]">
            <h4 className="w-full text-blue-600 font-medium text-lg mt-0">
              Cutting-Edge Technology
            </h4>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              The app continually integrates the latest technological
              advancements to provide users with the best tools and features for
              a superior online experience.
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-4 w-full lg:w-[40%]">
            <h4 className="w-full text-blue-600 font-medium text-lg mt-0">
              Accessibility
            </h4>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              Let us tell you more about Accessibility section by tapping the
              button below.
            </p>
            <SecondaryLightButton
              href="/"
              icon={<TbAccessible />}
              desc={"Accessibility"}
            />
          </div>
        </div>
        <div className="mt-8">
          <hr width="240" />
        </div>
        <h6 className="w-full lg:w-[40%] text-zinc-600 font-medium text-xs mt-8">
          Anything else? Maybe you can try to ..
        </h6>
        <div className="flex flex-row flex-wrap gap-4 mt-8">
          <SecondaryLightButton
            href="/"
            icon={<TbHelpCircle />}
            desc={"Talk to Our Team"}
          />
          <SecondaryLightButton
            href="/"
            icon={<TbStar />}
            desc={"Leave Us a Rating"}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
