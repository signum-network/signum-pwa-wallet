import { ChildrenProps } from "@/types/ChildrenProps";
import { FC } from "react";

export const Panel: FC<
  ChildrenProps & React.ComponentPropsWithoutRef<"div">
> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`bg-white shadow-md rounded-xl px-6 py-6 w-full print:shadow-none ${props.className}`}
    >
      {children}
    </div>
  );
};
