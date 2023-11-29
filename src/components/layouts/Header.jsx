import { Link } from "react-router-dom";
import { NavLinks } from "../../assets/data/NavLinks";
import { LogoIcon } from "../../assets/icons/icons";
import FirstCustomBtn from "../../common/CustomBtn";
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
        <div className="flex gap-4 items-center text-small font-semibold">
          <FirstCustomBtn>Sign In</FirstCustomBtn>
          <FirstCustomBtn>Sign Up</FirstCustomBtn>
        </div>
      </div>
    </>
  );
};

export default Header;
