const FirstCustomBtn = ({ children }) => {
  return (
    <button className=" py-1 rounded-full text-textColor btn hover:text-btnColor border border-transparent hover:border-btnColor px-9 transition-all duration-200">
      {children}
    </button>
  );
};

export default FirstCustomBtn;
