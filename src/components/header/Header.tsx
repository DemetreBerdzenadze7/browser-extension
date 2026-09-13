const Header = () => {
  return (
    <header className="bg-[#fbfdfe] shadow-[0_2px_3px_0_#d9e5f4] py-2 px-3 rounded-[10px] flex items-center justify-between ">
      <img src="/images/logo.svg" alt="Logo" />
      <button className="cursor-pointer bg-[#eee] rounded-[12px] w-12.5 h-12.5 flex items-center justify-center hover:bg-[#c6c6c6] focus:border-4 focus:border-red-400  ">
        <img src="/public/images/icon-moon.svg" alt="Moon" />
      </button>
    </header>
  );
};

export default Header;
