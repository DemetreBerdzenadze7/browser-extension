import { useExtension } from "../context/ExtensionContext";
import { Button } from "../ui/button";
import { filterBtns } from "./mainTypes";

const FiltersSection = () => {
  const { filter, setFilter } = useExtension();
  return (
    <div className="items-center justify-between md:flex">
      <h1 className="text-center text-[34px] font-bold leading-none tracking-[-1px] text-[#091540] dark:text-[#f8fafc]">
        Extensions List
      </h1>
      <div className="flex items-center justify-center gap-3 mt-6 md:mt-0 ">
        {filterBtns.map((btn) => (
          <Button
            key={btn}
            onClick={() => setFilter(btn as Parameters<typeof setFilter>[0])}
            className={
              filter === btn
                ? "cursor-pointer rounded-[99px] bg-red-700 px-5 py-2 text-[20px] leading-[1.4] tracking-[-0.3px] text-white hover:bg-red-700"
                : "cursor-pointer rounded-[99px] bg-white px-5 py-2 text-[20px] leading-[1.4] tracking-[-0.3px] text-[#091540] hover:bg-[#fbfdfe] hover:opacity-[0.7] focus:border-3 focus:border-red-400 dark:bg-[#202938] dark:text-[#f8fafc] dark:hover:bg-[#2c3748]"
            }
          >
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FiltersSection;
