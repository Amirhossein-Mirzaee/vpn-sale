import { useState } from "react";
import { NavLinks } from "../../assets/data/NavLinks";
import { HamburgetMenuOpen, LogoIcon } from "../../assets/icons/icons";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  console.log(location.hash);

  return (
    <div className="sm:visible md:block lg:hidden ">
      <button
        onClick={() => setOpen(true)}
        className="w-10  mx-4 text-btnColor cursor-pointer"
      >
        <HamburgetMenuOpen />
      </button>

      <div
        className={`fixed right-0 inset-y-0 w-[90vw] max-w-[300px] transition-all duration-300 bg-white px-5 z-50 overflow-y-auto max-h-screen shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center group py-4  ">
          <Link className="flex items-center justify-center px-12 py-6">
            <LogoIcon />
          </Link>
          <div className="  flex flex-col-reverse items-center py-11 justify-center gap-1 text-xl w-full group">
            {NavLinks.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.link}
                  onClick={() => setOpen(!open)}
                  className={`rounded-xl group/iocn py-4 w-full text-center  px-4 text-white font-semibold border-2 border-transparent hover:bg-gray-100 transition  cursor-pointer ${
                    location.hash === link.link ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center flex-row-reverse justify-end gap-4 ">
                    <p className="text-left text-secTextColor text-base">{link.title} </p>
                    <span className="text-secTextColor group-hover/iocn:text-btnColor transition">
                      {link.icon}
                    </span>
                  </div>
                </a>
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
