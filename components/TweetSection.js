import ImageComponent from "./ImageComponent";

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
      <div className="flex items-center justify-center col-span-1 px-4 bg-indigo-500">
        hello
      </div>
    </div>
  );
};

export default TweetSection;
