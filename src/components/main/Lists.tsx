import { useExtension } from "../context/ExtensionContext";

import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

const Lists = () => {
  const { isActive, setIsActive, filter } = useExtension();

  function handleChange(name: string): void {
    setIsActive(
      isActive.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item,
      ),
    );
  }

  const filteredList =
    filter === "All"
      ? isActive
      : filter === "Active"
        ? isActive.filter((extension) => !extension.isActive)
        : isActive.filter((extension) => extension.isActive);
  return (
    <>
      {filteredList.map((extension) => (
        <div
          key={extension.name}
          className="border min-h-55 border-[#d6e2f5] bg-[#fbfdfe] p-5 rounded-[20px] shadow-[0_1px_5px_1px_rgba(194,206,225,0.22),0_2px_2px_0_rgba(194,206,225,0.2)] flex flex-col justify-between"
        >
          <div className="flex items-center gap-4">
            <img src={extension.logo} alt="Logo" />
            <div className="flex flex-col gap-2">
              <p className="text-[20px] font-bold leading-[1.2] tracking-[-0.2px] text-[#091540]">
                {extension.name}
              </p>
              <p className="text-[16px] leading-[1.4] tracking-[-0.5px] text-[#535868]">
                {extension.description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Button className="bg-white text-[#091540] text-[16px] font-medium cursor-pointer leading-[1.4] tracking-[-0.5px] rounded-[99px] py-2 px-5 hover:bg-red-700 hover:text-white">
              Remove
            </Button>
            <Switch
              className="cursor-pointer"
              checked={extension.isActive}
              onCheckedChange={() => handleChange(extension.name)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Lists;
