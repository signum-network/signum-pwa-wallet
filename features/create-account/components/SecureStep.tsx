import { Input } from "@/app/components/Form";
import { StepPanel } from "@/app/components/Layout";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const SecureStep: React.FC<{
  onNextClick: () => void;
  step: number;
}> = ({ onNextClick, step }) => {
  const router = useRouter();

  const { t } = useTranslation("account");
  const tStep1 = (tag: string) => t(`new-account.step-1.${tag}`);

  return (
    <StepPanel
      number={step}
      title={tStep1("title")}
      subtitle={tStep1("description")}
      onBackClick={() => router.push("/get-started")}
      onNextClick={() => onNextClick()}
    >
      <div className="mt-3">
        <Input label={tStep1("input-label")} type="password" />
      </div>
      <p className="text-base text-default text leading-4 mt-8">
        {tStep1("tip")}
      </p>
    </StepPanel>
  );
};
