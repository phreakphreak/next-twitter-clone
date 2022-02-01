import Image from "./ImageComponent";
import twitterLogo from "../public/twitter.png";
import NavLink from "./NavLink";

const TwitterLogo = ({ className }) => {
  return (
    <div {...{ className }}>
      <NavLink to="/">
        <Image src={twitterLogo} alt="logo" />
      </NavLink>
    </div>
  );
};

export default TwitterLogo;
