import { TickIcon } from "../../assets/icons/icons";
import vec2 from "/png/vec2.png";
import { titles } from "../../assets/data/featuresTitle";

const Features = () => {
  return (
    <div id="features" className="flex flex-col xs:mt-16">
      <div className="text-[35px] text-center xs:block lg:hidden font-semibold">
        <p>We Provide Many </p>
        <p>Features You Can Use</p>
      </div>
      <div className="text-[16px] font-light text-secTextColor text-center xs:block lg:hidden">
        <p>You can explore the features that we provide with fun and </p>
        <p>have their own functions each feature.</p>
      </div>
      <div className="flex  flex-nowrap  items-center justify-center lg:gap-36 py-16 xs:px-4 md:px-0">
        <div className="md:max-w-[508px] xs:max-w-[330px]">
          <img src={vec2} alt="vector" className="w-full" />
        </div>
        <div className="flex flex-col gap-7 items-start font-semibold">
          <div className="text-[35px] xs:hidden lg:block">
            <p>We Provide Many </p>
            <p>Features You Can Use</p>
          </div>
          <div className="text-[16px] font-light text-secTextColor xs:hidden lg:block">
            <p>You can explore the features that we provide with fun and </p>
            <p>have their own functions each feature.</p>
          </div>
          <ul className="flex flex-col gap-7 text-secTextColor whitespace-nowrap">
            {titles.map((title) => (
              <li className="flex gap-2" key={title.id}>
                <span>
                  <TickIcon />
                </span>
                <p className="md:text-[14px] font-light xs:text-[13px] ">{title.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
