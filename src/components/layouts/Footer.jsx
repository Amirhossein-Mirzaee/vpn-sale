import { Link } from "react-router-dom";
import { engages, money, products } from "../../assets/data/footerdatas";
import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  TwitterIcon,
} from "../../assets/icons/icons";

const Footer = () => {
  return (
    <div id="footer" className="mt-16 py-16">
      <div className="flex items-stretch justify-around px-8">
        <div className="flex flex-col items-start justify-stretch gap-6">
          <div>
            <LogoIcon />
          </div>
          <p className="max-w-[340px] text-secTextColor text-[16px]">
            <span className="font-semibold">LaslesVPN</span> is a private virtual network
            that has unique features and has high security.
          </p>
          <div className="flex">
            <Link>
              <InstagramIcon />
            </Link>
            <Link>
              <FacebookIcon />
            </Link>
            <Link>
              <TwitterIcon />
            </Link>
          </div>
          <p className="font-light text-[#AFB5C0]">
            ©2020 <span className="font-semibold">LaslesVPN</span>
          </p>
        </div>
        <div className="flex items-stretch gap-24">
          <ul className="flex flex-col text-left font-semibold gap-3.5">
            <p className="text-[18px]">Products</p>
            {products.map((p) => (
              <Link className="font-light text-secTextColor " key={p.id}>
                {p.title}
              </Link>
            ))}
          </ul>
          <ul className="flex flex-col text-left font-semibold gap-3.5">
            <p className="text-[18px]">Engage</p>
            {engages.map((e) => (
              <Link className="font-light text-secTextColor " key={e.id}>
                {e.title}
              </Link>
            ))}
          </ul>
          <ul className="flex flex-col text-left font-semibold gap-3.5">
            <p className="text-[18px]">Earn Money</p>
            {money.map((m) => (
              <Link className="font-light text-secTextColor " key={m.id}>
                {m.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
