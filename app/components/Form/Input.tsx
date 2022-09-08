import React from "react";
import clsx from "clsx";

type InputProps = {
  label: string;
} & React.ComponentPropsWithoutRef<"input">;

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="text-tertiary flex flex-col">
      <label className="text-sm mb-2">{label}</label>
      <input
        {...props}
        className={`border-tertiary border-[1px] p-3 rounded 
            focus:border-default focus:text-default outline-none ${props.className}`}
      />
    </div>
  );
};
