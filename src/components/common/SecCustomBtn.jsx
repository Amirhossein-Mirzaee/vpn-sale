const SecCustomBtn = ({ children, className }) => {
  return (
    <div
      className={`hover:shadow-lg rounded-full hover:shadow-btnColor  transition-all duration-200 ${className}`}
    >
      <button className={`border border-btnColor px-9 rounded-full py-1 text-btnColor hover:text-white hover:bg-btnColor transition-all duration-200 ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default SecCustomBtn;
