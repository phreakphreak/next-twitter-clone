import Navigation from "./Navigation";
import TwitterLogo from "./TwitterLogo";
import TweetButtonHeader from "./TweetButtonHeader";

const Header = () => {
  return (
    <div className="flex flex-row justify-end h-screen text-xl cols-span-1 ">
      <div className="flex flex-col justify-between h-full px-6 py-4 text-white w-[280px] ">
        <div className="w-full h-[600px] ">
          <TwitterLogo className="mb-4 w-7 h-7" />
          <Navigation className="flex flex-col justify-center gap-8 py-4" />
          <TweetButtonHeader />
        </div>
        <div className="w-full h-20 ">avatar</div>
      </div>
    </div>
  );
};

export default Header;
