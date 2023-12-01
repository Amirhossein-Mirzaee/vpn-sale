import freePng from "/png/Free.png";
import standardPng from "/png/Standard.png";
import premiumPng from "/png/Premium.png";
import { planTitles } from "../../assets/data/planTitle";
import { JamCheck } from "../../assets/icons/icons";
import SecCustomBtn from "../../common/SecCustomBtn";

const Plan = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 pt-16 py-10">
        <p className="font-semibold text-textColor text-[35px]">Choose Your Plan</p>
        <p className="text-secTextColor font-light text-[16px] max-w-lg text-center">
          Lets choose the package that is best for you and explore it happily and
          cheerfully.
        </p>
      </div>
      <div className="flex items-center justify-center gap-36 ">
        <div className="flex flex-col items-center border-[#DDDDDD] border-2 p-20 gap-9">
          <div className="max-w-[154.9px]">
            <img className="w-full" src={freePng} alt="" />
          </div>
          <p className="text-[18px] font-semibold text-textColor">Free Plan</p>
          <ul className="flex flex-col items-start gap-4">
            {planTitles.map((title) => (
              <li className="flex gap-10 text-secTextColor" key={title.id}>
                <span>
                  <JamCheck />
                </span>
                <p>{title.title}</p>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-[25px]">Free</p>
          <SecCustomBtn>Select</SecCustomBtn>
        </div>
        <div className="flex flex-col items-center border-[#DDDDDD] border-2 p-20  gap-9">
          <div className="max-w-[154.9px]">
            <img className="w-full" src={standardPng} alt="" />
          </div>
          <p className="text-[18px] font-semibold text-textColor">Standard Plan</p>
          <ul className="flex flex-col items-start gap-4">
            {planTitles.map((title) => (
              <li className="flex gap-10 text-secTextColor" key={title.id}>
                <span>
                  <JamCheck />
                </span>
                <p>{title.title}</p>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-[25px]">
            $9  <span className="font-light">/ mo</span>
          </p>
          <SecCustomBtn>Select</SecCustomBtn>
        </div>
        <div className="flex flex-col items-center border-[#DDDDDD] border-2 p-20  gap-9">
          <div className="max-w-[154.9px]">
            <img className="w-full" src={premiumPng} alt="" />
          </div>
          <p className="text-[18px] font-semibold text-textColor">Premium Plan</p>
          <ul className="flex flex-col items-start gap-4">
            {planTitles.map((title) => (
              <li className="flex gap-10 text-secTextColor" key={title.id}>
                <span>
                  <JamCheck />
                </span>
                <p>{title.title}</p>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-[25px]">
            $12  <span className="font-light"> / mo</span>
          </p>
          <SecCustomBtn>Select</SecCustomBtn>
        </div>
      </div>
    </>
  );
};

export default Plan;
