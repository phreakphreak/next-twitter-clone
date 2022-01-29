import Image from "next/image";
import { BiHomeCircle, BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineBookmarkBorder, MdOutlineMailOutline } from "react-icons/md";
import twitterLogo from "../public/twitter.png";
import { generateUUID } from "../utils";
import NavLink from "./NavLink";

const navItems = [
  {
    label: "Home",
    IconComponent: BiHomeCircle,
    to: "/home",
  },
  {
    label: "Search",
    IconComponent: BiSearch,
    to: "/search",
  },
  {
    label: "Notifications",
    IconComponent: IoMdNotificationsOutline,
    to: "/notifications",
  },
  {
    label: "Messages",
    IconComponent: MdOutlineMailOutline,
    to: "/messages",
  },
  {
    label: "Bookmarks",
    IconComponent: MdOutlineBookmarkBorder,
    to: "/bookmarks",
  },
];

const Header = () => {
  return (
    <div className="flex flex-row justify-end h-screen text-xl cols-span-1 ">
      <div className="flex flex-col justify-between h-full px-6 py-4 text-white w-[280px] ">
        <div className="w-full h-[600px] ">
          <div className="mb-4 w-7 h-7">
            <NavLink to="/">
              <Image src={twitterLogo} alt="logo" />
            </NavLink>
          </div>
          <nav className="flex flex-col justify-center gap-8 py-4">
            {navItems.map((item) => (
              <NavLink key={generateUUID()} {...item} />
            ))}
          </nav>
          <button className="w-full h-[50px] mt-8 text-white rounded-full bg-sky-500">
            Tweet
          </button>
        </div>
        <div className="w-full h-20 ">avatar</div>
      </div>
    </div>
  );
};

export default Header;
