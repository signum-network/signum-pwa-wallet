import { ChildrenProps } from "@/types/ChildrenProps";
import clsx from "clsx";
import { FC } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Button } from "../Button";
import { Panel } from "./Panel";

type StepPanelProps = {
  number: number;
  title: string;
  subtitle?: string;
  onBackClick: () => void;
  onNextClick?: () => void;
  showNext?: boolean;
} & ChildrenProps &
  React.ComponentPropsWithoutRef<"div">;

export const StepPanel: FC<StepPanelProps> = ({
  number,
  title,
  subtitle = "",
  children,
  onBackClick,
  onNextClick,
  showNext = true,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full min-h-full">
      <Panel {...props} className="h-full flex-1">
        <h2 className="print:hidden">
          <span className="text-default text-4xl font-bold uppercase">
            {number}
          </span>
          <span className="text-default text-xl uppercase ml-2">{title}</span>
        </h2>
        <div className="mt-2">
          {subtitle && (
            <div className="text-tertiary text-base">{subtitle}</div>
          )}
          {children}
        </div>
      </Panel>
      <div className="flex mt-4 print:hidden">
        <Button
          className={clsx("flex-1", showNext && "rounded-r-none")}
          label="Back"
          variant="gray"
          Icon={HiArrowLeft}
          iconPlacement="left"
          onClick={onBackClick}
        />
        {showNext && (
          <Button
            className="flex-1 rounded-l-none"
            label="Next"
            Icon={HiArrowRight}
            iconPlacement="right"
            onClick={onNextClick}
          />
        )}
      </div>
    </div>
  );
};
