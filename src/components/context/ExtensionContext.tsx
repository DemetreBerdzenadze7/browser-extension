import { createContext, useContext, useEffect, useState } from "react";
import data from "../../data/data.json";

export interface Data {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

type Filter = "All" | "Active" | "Inactive";

interface ExtensionContextType {
  isActive: Data[];
  setIsActive: (value: Data[]) => void;
  filter: Filter;
  setFilter: (value: Filter) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const ExtensionContext = createContext<ExtensionContextType | null>(null);

export const ExtensionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isActive, setIsActive] = useState<Data[]>(data);
  const [filter, setFilter] = useState<Filter>("All");
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((current) => !current);

  return (
    <ExtensionContext.Provider
      value={{ isActive, setIsActive, filter, setFilter, isDark, toggleTheme }}
    >
      {children}
    </ExtensionContext.Provider>
  );
};

export const useExtension = () => {
  const context = useContext(ExtensionContext);
  if (!context)
    throw new Error("useExtension must be used within ExtensionProvider");
  return context;
};
