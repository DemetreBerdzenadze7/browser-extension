import { Button } from "../ui/button";
import { filterBtns } from "./mainTypes";

const FiltersSection = () => {
  return (
    <div className="md:flex items-center justify-between  ">
      <h1 className="text-[#091540] font-bold leading-none tracking-[-1px] text-[34px] text-center">
        Extensions List
      </h1>
      <div className="flex items-center justify-center gap-3 mt-6 md:mt-0 ">
        {filterBtns.map((btn) => (
          <Button className="bg-white text-[#091540] cursor-pointer leading-[1.4] tracking-[-0.3px] text-[20px] rounded-[99px] py-2 px-5 hover:bg-red-700 hover:text-white">
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FiltersSection;
