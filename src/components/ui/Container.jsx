const Container = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-10 md:px-10 sm:px-[120px] px-4 relative z-40 bg-transparent">
      {children}
    </div>
  );
};

export default Container;
