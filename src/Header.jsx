function Header({ children }) {
  return (
    <div className="Header p-4 mb-2 ">
      <h1 className="text-center text-2xl md:text-3xl text-gray-800 font-bold">
        {children}
      </h1>
    </div>
  );
}

export default Header;
