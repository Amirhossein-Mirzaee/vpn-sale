import { Link } from "react-router-dom";
import { NavLinks } from "../../assets/data/NavLinks";
import { LogoIcon } from "../../assets/icons/icons";
const Header = () => {
  return (
    <>
      <div className="flex justify-around py-5 font-light">
        <LogoIcon />
        <ul className="flex items-center justify-center gap-6 text-secTextColor text-small">
          {NavLinks.map((item) => (
            <Link key={item.id}>{item.title}</Link>
          ))}
        </ul>
        <div className="flex gap-12 items-center text-small font-semibold">
          <button className=" py-1 rounded-full text-textColor ">Sign In</button>
          <button className=" outline-none border border-btnColor px-6 py-1 rounded-full text-btnColor">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
