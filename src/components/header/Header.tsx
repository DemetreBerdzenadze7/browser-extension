import { useExtension } from "../context/ExtensionContext";

const Header = () => {
  const { isDark, toggleTheme } = useExtension();

  return (
    <header className="flex items-center justify-between rounded-[10px] bg-[#fbfdfe] px-3 py-2 shadow-[0_2px_3px_0_#d9e5f4] dark:bg-[#202938] dark:shadow-[0_2px_3px_0_#111827]">
      <img src="/images/logo.svg" alt="Logo" />
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className="flex h-12.5 w-12.5 cursor-pointer items-center justify-center rounded-[12px] bg-[#eee] hover:bg-[#c6c6c6] focus:border-4 focus:border-red-400 dark:bg-[#3a4558] dark:hover:bg-[#4b5870]"
      >
        <img
          src={isDark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
          alt=""
        />
      </button>
    </header>
  );
};

export default Header;
