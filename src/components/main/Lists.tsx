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

  function handleDelete(extensionName: string) {
    setIsActive(
      isActive.filter((extension) => extension.name !== extensionName),
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
          className="flex min-h-55 flex-col justify-between rounded-[20px] border border-[#d6e2f5] bg-[#fbfdfe] p-5 shadow-[0_1px_5px_1px_rgba(194,206,225,0.22),0_2px_2px_0_rgba(194,206,225,0.2)] dark:border-[#3a4558] dark:bg-[#202938] dark:shadow-[0_1px_5px_1px_rgba(10,15,25,0.35)]"
        >
          <div className="flex items-center gap-4">
            <img src={extension.logo} alt="Logo" />
            <div className="flex flex-col gap-2">
              <p className="text-[20px] font-bold leading-[1.2] tracking-[-0.2px] text-[#091540] dark:text-[#f8fafc]">
                {extension.name}
              </p>
              <p className="text-[16px] leading-[1.4] tracking-[-0.5px] text-[#535868] dark:text-[#c4ccda]">
                {extension.description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Button
              onClick={() => handleDelete(extension.name)}
              className="cursor-pointer rounded-[99px] bg-white px-5 py-2 text-[16px] font-medium leading-[1.4] tracking-[-0.5px] text-[#091540] hover:bg-red-700 hover:text-white dark:bg-[#2c3748] dark:text-[#f8fafc] dark:hover:bg-red-700"
            >
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
