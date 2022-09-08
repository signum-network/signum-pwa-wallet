import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Form";
import { StepPanel } from "@/app/components/Layout";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { HiOutlineCheckCircle } from "react-icons/hi";

export const ActivateStep: React.FC<{
  onBackClick: () => void;
  step: number;
}> = ({ onBackClick, step }) => {
  const router = useRouter();
  const { t } = useTranslation("account");
  const tStep3 = (tag: string) => t(`new-account.step-3.${tag}`);

  return (
    <StepPanel
      number={step}
      title={tStep3("title")}
      subtitle={tStep3("description")}
      onBackClick={() => onBackClick()}
      showNext={false}
    >
      <div className="mt-3">
        <Input label={tStep3("input-label")} />
      </div>
      <p className="text-base text-default text leading-4 mt-8">
        {tStep3("tip")}
      </p>

      <Button
        label="Activate"
        variant="tertiary"
        Icon={HiOutlineCheckCircle}
        className="w-full mt-5 text-xl"
        onClick={() => router.push("/activated-account")}
      />
    </StepPanel>
  );
};
