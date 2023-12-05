import { NavLinks } from "../../assets/data/NavLinks";
import { LogoIcon } from "../../assets/icons/icons";
import FirstCustomBtn from "../common/CustomBtn";
import { Link } from "react-router-dom";
import Menu from "../utils/HamburgerMenu";
import { useState } from "react";

const Header = () => {
  const [bgColor, setBgColor] = useState("transparent");

  const handleScroll = () => {
    // Change the background color based on the scroll position
    if (window.scrollY > 100) {
      setBgColor("white"); // Set your desired background color
    } else {
      setBgColor("transparent"); // Reset to the initial background color
    }
  };
  window.onscroll = handleScroll;
  return (
    <>
      <div
        onScroll={""}
        className={`flex md:justify-around xs:justify-between py-5 font-light xs:px-3 md:px-0 items-center lg:gap-16 sticky  z-[100] top-0 transition-all duration-300 w-full`}
        style={{ background: bgColor }}
      >
        
        <Link to="/">
          <LogoIcon />
        </Link>
        <ul className="lg:flex items-center justify-center gap-6 text-secTextColor text-small relative xs:hidden ">
          {NavLinks.map((item) => (
            <a href={item.link} key={item.id}>
              <span className="absolute bottom-0 left-0 w-0 bg-blue-500 border-b-2 border-blue-500 duration-500 transform origin-bottom-left group-hover:w-full"></span>
              <p>{item.title}</p>
            </a>
          ))}
        </ul>
        <div className="md:flex lg:gap-4 md:gap-1 text-small xs:hidden">
          <FirstCustomBtn className={"hover:text-textColor border-none"}>
            Sign In
          </FirstCustomBtn>
          <FirstCustomBtn className={"border border-btnColor text-btnColor"}>
            Sign Up
          </FirstCustomBtn>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Header;
