import { Textarea } from "@/app/components/Form";
import { StepPanel } from "@/app/components/Layout";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export const PassphraseStep: React.FC<{
  onNextClick: () => void;
  onBackClick: () => void;
  step: number;
}> = ({ onNextClick, onBackClick, step }) => {
  const router = useRouter();

  const { t } = useTranslation("account");
  const tStepPassphrase = (tag: string) =>
    t(`new-account.step-passphrase.${tag}`);

  return (
    <StepPanel
      number={step}
      title={tStepPassphrase("title")}
      subtitle={tStepPassphrase("description")}
      onBackClick={() => onBackClick()}
      onNextClick={() => onNextClick()}
    >
      <div className="mt-3">
        <Textarea
          label="Type your passphrase"
          rows={12}
          className="resize-none"
        />
      </div>
    </StepPanel>
  );
};
