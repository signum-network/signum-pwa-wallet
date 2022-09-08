import { ChildrenProps } from "@/types/ChildrenProps";
import clsx from "clsx";
import { FC } from "react";
import {
  HiInformationCircle,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineInformationCircle,
  HiOutlineXCircle,
} from "react-icons/hi";

type InfoBoxProps = {
  variant: "info" | "warning" | "danger" | "success";
} & ChildrenProps &
  React.ComponentPropsWithoutRef<"div">;

export const InfoBox: FC<InfoBoxProps> = ({
  variant = "info",
  children,
  ...props
}) => {
  const variantConfigs = {
    info: { classes: "bg-blue-200", icon: HiOutlineInformationCircle },
    warning: { classes: "bg-amber-200", icon: HiOutlineExclamationCircle },
    danger: { classes: "bg-red-300", icon: HiOutlineXCircle },
    success: { classes: "bg-emerald-300", icon: HiOutlineCheckCircle },
  };

  const IconToShow = variantConfigs[variant].icon;

  return (
    <div
      {...props}
      className={clsx(
        "rounded px-4 py-5 bg-y text-default flex",
        variantConfigs[variant].classes,
        props.className
      )}
    >
      <div>
        <IconToShow size={28} className="mr-3" />
      </div>
      {children}
    </div>
  );
};
