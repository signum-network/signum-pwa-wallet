import React from "react";
import clsx from "clsx";
import { IconType } from "react-icons";
import { Size, Variant } from "@/types/ComponentTypes";

type ButtonProps = {
  label: string;
  isLoading?: boolean;
  variant?: Variant;
  outline?: boolean;
  disabled?: boolean;
  Icon?: IconType;
  iconSize?: Size;
  iconPlacement?: "left" | "right" | "top" | "bottom";
} & React.ComponentPropsWithoutRef<"button">;

export const Button = ({
  label,
  isLoading = false,
  variant = "primary",
  outline = false,
  Icon,
  iconSize = "sm",
  iconPlacement = "left",
  ...props
}: ButtonProps) => {
  const outlineClasses = "bg-transparent border-[1px]";

  const placementScheme = {
    left: "flex-row",
    right: "flex-row-reverse",
    top: "flex-col",
    bottom: "flex-col-reverse",
  };

  const iconSizeScheme = {
    xs: "1em",
    sm: "1.5em",
    md: "2em",
    lg: "2.5em",
    xl: "3em",
  };

  const colorScheme = {
    default: {
      fill: "bg-default hover:bg-default/70 text-white",
      outline: `${outlineClasses} hover:bg-default/25 border-default text-default`,
    },
    primary: {
      fill: "bg-primary hover:bg-primary/70 text-white",
      outline: `${outlineClasses} hover:bg-primary/25 border-primary text-primary`,
    },
    secondary: {
      fill: "bg-secondary hover:bg-secondary/70 text-slate-800",
      outline: `${outlineClasses} hover:bg-slate-800/25 border-bg-slate-800 text-bg-slate-800`,
    },
  };

  return (
    <button
      type="button"
      {...props}
      className={clsx(
        colorScheme[variant][outline ? "outline" : "fill"],
        "py-4 px-5 rounded transition-colors",
        props.className
      )}
    >
      <div
        className={clsx(
          placementScheme[iconPlacement],
          "flex items-center justify-center"
        )}
      >
        {Icon && <Icon className="m-1" size={iconSizeScheme[iconSize]} />}
        {label}
      </div>
    </button>
  );
};
