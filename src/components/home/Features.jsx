import { TickIcon } from "../../assets/icons/icons";
import vec2 from "../../assets/png/vec2.png";
import { titles } from "../../assets/data/featuresTitle";

const Features = () => {
  return (
    <div>
      <div className="flex  items-center justify-center gap-36 py-16">
        <div className="max-w-[508px]">
          <img src={vec2} alt="vector" className="w-full" />
        </div>
        <div className="flex flex-col gap-7 items-start font-semibold">
          <div className="text-[35px]">
            <p>We Provide Many </p>
            <p>Features You Can Use</p>
          </div>
          <div className="text-[16px] font-light text-secTextColor">
            <p>You can explore the features that we provide with fun and </p>
            <p>have their own functions each feature.</p>
          </div>
          <ul className="flex flex-col gap-7 text-secTextColor">
            {titles.map((title) => (
              <li className="flex gap-2" key={title.id}>
                <span>
                  <TickIcon />
                </span>
                <p className="text-[14px] font-light ">{title.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
