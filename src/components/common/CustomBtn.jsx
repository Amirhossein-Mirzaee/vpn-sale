const FirstCustomBtn = ({ children, className }) => {
  return (
    <button
      className={`${className} py-1 rounded-full  lg:w-[150px] lg:h-[45px] md:px-5 transition-all duration-200 font-semibold` }
    >
      {children}
    </button>
  );
};

export default FirstCustomBtn;
