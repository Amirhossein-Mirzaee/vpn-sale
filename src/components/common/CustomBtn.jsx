const FirstCustomBtn = ({ children }) => {
  return (
    <button className=" py-1 rounded-full text-textColor font-light  hover:text-btnColor border border-transparent hover:border-btnColor lg:px-9 md:px-5 transition-all duration-200">
      {children}
    </button>
  );
};

export default FirstCustomBtn;
