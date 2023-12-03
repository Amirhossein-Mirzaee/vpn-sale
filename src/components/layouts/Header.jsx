import { NavLinks } from "../../assets/data/NavLinks";
import { LogoIcon } from "../../assets/icons/icons";
import FirstCustomBtn from "../common/CustomBtn";
import { NavLink } from "react-router-dom";
import { Link as Kinder } from "react-scroll";
import Menu from "../utils/HamburgerMenu";

const Header = () => {
  return (
    <>
      <div className="flex md:justify-around xs:justify-between py-5 font-light xs:px-3 md:px-0 items-center lg:gap-16">
        <NavLink to="/">
          <LogoIcon />
        </NavLink>
        <ul className="lg:flex items-center justify-center gap-6 text-secTextColor text-small relative xs:hidden ">
          {NavLinks.map((item) => (
            <NavLink className="" key={item.id}>
              <span className="absolute bottom-0 left-0 w-0 bg-blue-500 border-b-2 border-blue-500 duration-500 transform origin-bottom-left group-hover:w-full"></span>
              <Kinder to={item.link} smooth={true} offset={-60} duration={500}>
                {item.title}
              </Kinder>
            </NavLink>
          ))}
        </ul>
        <div className="md:flex lg:gap-4 md:gap-1 text-small xs:hidden">
          <FirstCustomBtn className={"hover:text-textColor border-none"}>Sign In</FirstCustomBtn>
          <FirstCustomBtn className={"border border-btnColor text-btnColor"}>Sign Up</FirstCustomBtn>
        </div>
          <Menu />
      </div>
    </>
  );
};

export default Header;
