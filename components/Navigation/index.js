import NavLink from "../NavLink";
import { navItems } from "./navItems";
import { generateUUID } from "../../utils";

const Navigation = ({ className }) => {
  return (
    <>
      <nav {...{ className }}>
        {navItems.map((item) => (
          <NavLink key={generateUUID()} {...item} />
        ))}
      </nav>
    </>
  );
};

export default Navigation;
