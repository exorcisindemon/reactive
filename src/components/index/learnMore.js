import VersionControl from "../../utility/versionControl";
import SecondaryLightButton from "../button/secondaryLightButton";
import { TbArrowLeft, TbSortDescending2, TbHelpCircle, TbStar } from "react-icons/tb";

const LearnMore = () => {
  return (
    <div className="flex flex-col justify-start w-full lg:w-[70%] p-8 lg:p-16">
      <VersionControl />
      <div className="mt-8 overflow-y-auto">
        <a
          href="/"
          className="flex flex-row gap-2 items-center text-black font-bold text-2xl lg:text-4xl mt-0 transition-all hover:text-blue-600"
        >
          <TbArrowLeft />
          Learn More About Reactive
        </a>
        <h3 className="w-full lg:w-[40%] text-zinc-600 font-medium text-sm lg:text-lg mt-8">
          Welcome to the section, where you can delve deeper into what makes
          Reactive the go-to social media app for today's dynamic digital world.
        </h3>
        <div className="flex flex-col flex-wrap gap-8 mt-8">
          <div className="flex flex-col flex-wrap gap-4 w-full lg:w-[40%]">
            <h4 className="w-full text-blue-600 font-medium text-lg mt-0">
              Why Reactive?
            </h4>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              Reactive, the name that's been making waves in the realm of social
              media, is not just another app - it's a revelation. It's a space
              where the digital world comes alive, offering users a platform
              that is versatile, engaging, and entirely in tune with the
              ever-evolving dynamics of our lives.
            </p>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              One of the hallmarks of Reactive is its adaptability. It
              recognizes that no two users are alike and, therefore, curates
              content that aligns with your unique interests and preferences.
              With Reactive, you're not just a passive observer; you're an
              active participant in a dynamic, ever-changing digital landscape.
            </p>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              It's also a place where you can discover vibrant communities, each
              a universe of its own, filled with individuals who share your
              passions, interests, and dreams. Whether it's a shared hobby, a
              professional pursuit, or simply a love for a particular niche,
              Reactive enables you to connect, collaborate, and create with
              like-minded individuals from around the world.
            </p>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              At Reactive, your privacy is sacred. We believe in giving you the
              power to control who gets to see your content and engage with you.
              Our comprehensive privacy settings ensure that you can interact on
              your terms, making your social experience not just engaging but
              also secure.
            </p>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              Getting started with Reactive is a breeze. You can choose to
              register with your email or link your existing social media
              accounts. The registration process is designed to be
              user-friendly, ensuring that you can get up and running in no
              time.
            </p>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              Reactive is not just an app; it's a way of life. It's about
              real-time connections, adaptability, and dynamic engagement. It's
              about you, your interests, and your ever-evolving digital
              presence. It's the social media platform of the future, and it's
              here to help you connect, engage, and thrive in the ever-evolving
              digital universe. Join us, and discover the Reactive experience
              today.
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-4 w-full lg:w-[40%]">
            <h4 className="w-full text-blue-600 font-medium text-lg mt-0">
              Our Idea
            </h4>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              Incorporating cutting-edge technology, Reactive is at the
              forefront of the social media revolution. We are committed to
              bringing you the latest tools and features that enhance your
              online experience, keeping you in tune with the ever-changing
              landscape of the digital world.
            </p>
          </div>
          <div className="flex flex-col flex-wrap gap-4 w-full lg:w-[40%]">
            <h4 className="w-full text-blue-600 font-medium text-lg mt-0">
              Key Features
            </h4>
            <p className="w-full text-zinc-600 font-medium text-sm mt-0">
              Let us tell you more about Key Features section by tapping the
              button below.
            </p>
            <SecondaryLightButton
              href="/"
              icon={<TbSortDescending2 />}
              desc={"Key Features"}
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

export default LearnMore;
