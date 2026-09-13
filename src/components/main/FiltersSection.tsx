import { useExtension } from "../context/ExtensionContext";
import { Button } from "../ui/button";
import { filterBtns } from "./mainTypes";

const FiltersSection = () => {
  const { setFilter } = useExtension();
  return (
    <div className="md:flex items-center justify-between  ">
      <h1 className="text-[#091540] font-bold leading-none tracking-[-1px] text-[34px] text-center">
        Extensions List
      </h1>
      <div className="flex items-center justify-center gap-3 mt-6 md:mt-0 ">
        {filterBtns.map((btn) => (
          <Button
            key={btn}
            onClick={() => setFilter(btn as Parameters<typeof setFilter>[0])}
            className="bg-white text-[#091540] cursor-pointer leading-[1.4] tracking-[-0.3px] text-[20px] rounded-[99px] py-2 px-5 hover:bg-[#fbfdfe] hover:opacity-[0.7] focus:border-3 focus:border-red-400"
          >
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FiltersSection;
