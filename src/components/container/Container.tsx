import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-300 px-4 py-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
