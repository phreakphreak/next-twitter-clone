import ImageComponent from "./ImageComponent";
import { IoImageOutline } from "react-icons/io5";
import { MdGif } from "react-icons/md";
import avatarImage from "../assets/avatar.jpg";

const TweetSection = () => {
  return (
    <div className="w-full h-full row-span-1 px-4 overflow-hidden gap-1 grid grid-cols-[55px,1fr]">
      <div className="flex justify-center col-span-1 py-2 ">
        <div className="h-full">
          <ImageComponent
            src={avatarImage}
            className="w-[50px] object-contain h-[50px] rounded-full"
            alt="avatar"
          />
        </div>
      </div>
      <div className="flex items-center justify-center col-span-1 px-4 bg-indigo-500 flex-rows">
        <div>
          <textarea
            rows="5"
            cols="33"
            placeholder="What's happening?"
            className="w-full text-white bg-transparent border-none outline-none resize-none "
          ></textarea>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center h-16 gap-2 ">
        <i className="flex items-center p-0justify-center">
          <IoImageOutline className={"text-base"} color="#1d9bf0" />
        </i>
        <i className="justify-center p-0 rounded-sm  items-center flex border-[0.5px]   border-[#1d9bf0] ">
          <MdGif size={17} color="#1d9bf0" />
        </i>
      </div>
    </div>
  );
};

export default TweetSection;
