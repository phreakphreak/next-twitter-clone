import { BiHomeCircle, BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineBookmarkBorder, MdOutlineMailOutline } from "react-icons/md";

export const navItems = [
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
