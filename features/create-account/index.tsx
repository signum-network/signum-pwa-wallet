import { Button } from "@/app/components/Button";
import { HiOutlineIdentification, HiOutlineUserAdd } from "react-icons/hi";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { SecureStep } from "./components/SecureStep";
import { AccountDataStep } from "./components/AccountDataStep";
import { ActivateStep } from "./components/ActivateStep";
import { PassphraseStep } from "./components/PassphraseStep";
import { useRouter } from "next/router";

export const CreateAccount: React.FC<{ mode: "create" | "import" }> = ({
  mode,
}) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(0);

  const { t } = useTranslation("account");

  const onNextStep = () => setCurrentStep(currentStep + 1);
  const onPreviousStep = () => setCurrentStep(currentStep - 1);

  const stepsComponents = [
    <SecureStep key="secure-step" onNextClick={onNextStep} step={1} />,
    <AccountDataStep
      key="account-data-step"
      onNextClick={onNextStep}
      onBackClick={onPreviousStep}
      step={2}
    />,
    <ActivateStep
      key="activate-data-step"
      onBackClick={onPreviousStep}
      step={3}
    />,
  ];

  const stepsImportComponents = [
    <SecureStep key="secure-step" onNextClick={onNextStep} step={1} />,
    <PassphraseStep
      key="passphrase-step"
      onNextClick={onNextStep}
      onBackClick={onPreviousStep}
      step={2}
    />,
    <AccountDataStep
      key="account-data-step"
      onNextClick={() => router.push("/imported-account")}
      onBackClick={onPreviousStep}
      step={3}
    />,
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-0">
      <div className="text-center py-3">
        <h1 className="text-2xl font-extrabold uppercase text-default">
          {mode === "create"
            ? t("new-account.title")
            : t("new-account.title-import")}
        </h1>
      </div>

      <div className="w-full flex-1">
        {mode === "create"
          ? stepsComponents[currentStep]
          : stepsImportComponents[currentStep]}
      </div>
    </div>
  );
};
