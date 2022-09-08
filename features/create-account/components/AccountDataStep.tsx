import { Button } from "@/app/components/Button";
import { StepPanel } from "@/app/components/Layout";
import { InfoBox } from "@/app/components/Layout";
import { useTranslation } from "react-i18next";
import { HiOutlineDuplicate, HiOutlinePrinter } from "react-icons/hi";

export const AccountDataStep: React.FC<{
  onNextClick: () => void;
  onBackClick: () => void;
  step: number;
}> = ({ onNextClick, onBackClick, step }) => {
  const { t } = useTranslation("account");
  const tStep2 = (tag: string) => t(`new-account.step-2.${tag}`);

  return (
    <StepPanel
      number={step}
      title={tStep2("title")}
      subtitle={tStep2("description")}
      onBackClick={() => onBackClick()}
      onNextClick={() => onNextClick()}
    >
      <InfoBox variant="warning" className="mt-3">
        <div>
          <p className="leading-4 font-bold">{tStep2("warning-title")}</p>
          <p className="text-sm leading-3 mt-2">
            {tStep2("warning-description")}
          </p>
        </div>
      </InfoBox>

      <div className="mt-4">
        <p className="text-tertiary">{tStep2("address")}</p>
        <p className="text-default font-bold text-xl leading-6">
          S-KLM4-2JWN-2AVB-5DGHX
        </p>

        <p className="text-tertiary mt-3">{tStep2("passphrase")}</p>
        <p className="text-default font-bold text-xl leading-6">
          comic author scale maze spend faith scale dust kick tag track clay
        </p>
      </div>
      <div className="flex mt-4 justify-end print:hidden">
        <Button
          variant="secondary"
          label="Copy"
          Icon={HiOutlineDuplicate}
          className="mr-4 py-1"
        />
        <Button
          variant="secondary"
          label="Print"
          Icon={HiOutlinePrinter}
          onClick={() => window.print()}
          className="py-2 px-6"
        />
      </div>
    </StepPanel>
  );
};
