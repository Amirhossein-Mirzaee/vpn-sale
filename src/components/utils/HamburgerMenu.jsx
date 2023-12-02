import { useState } from "react";
import { NavLinks } from "../../assets/data/NavLinks";
import { Link as Kinder } from "react-scroll";
import { HamburgetMenuOpen, LogoIcon } from "../../assets/icons/icons";
import { Link } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:visible md:block lg:hidden ">
      <button
        onClick={() => setOpen(true)}
        className="w-10  mx-4 text-btnColor cursor-pointer"
      >
        <HamburgetMenuOpen />
      </button>

      <div
        className={`fixed right-0 inset-y-0 w-[250px] transition-all duration-300 bg-gradient-to-br from-[#F8F8F8] via-gray-400 via-55% to-btnColor z-50 overflow-y-auto max-h-screen shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center group py-4  ">
          <Link className="flex items-center justify-center px-12 py-6">
            <LogoIcon />
          </Link>
          <div className="  flex flex-col-reverse items-center py-11 justify-center gap-y-5  text-xl">
            {NavLinks.map((link) => {
              return (
                <Kinder
                  key={link.id}
                  to={link.link}
                  smooth={true}
                  offset={-65}
                  duration={500}
                  onClick={() => setOpen(!open)}
                  className="bg-btnColor px-14 rounded-xl py-5 w-full text-center  text-white font-semibold  hover:bg-secTextColor transition-all duration-300 cursor-pointer"
                >
                  <p>{link.title}</p>
                </Kinder>
              );
            })}
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={` tablet:invisible z-40 fixed bg-black/30 inset-0 backdrop-blur-sm transition-all duration-300 ${
          open ? "opacity-100 visible " : "opacity-0 invisible"
        }`}
      ></div>
    </div>
  );
};

export default Menu;
