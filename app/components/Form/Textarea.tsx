import React from "react";
import clsx from "clsx";

type TextareaProps = {
  label: string;
} & React.ComponentPropsWithoutRef<"textarea">;

export const Textarea = ({ label, ...props }: TextareaProps) => {
  return (
    <div className="text-tertiary flex flex-col">
      <label className="text-sm mb-2">{label}</label>
      <textarea
        {...props}
        className={`border-tertiary border-[1px] p-3 rounded 
            focus:border-default focus:text-default outline-none ${props.className}`}
      />
    </div>
  );
};
