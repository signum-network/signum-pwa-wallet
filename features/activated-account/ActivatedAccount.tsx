import { Button } from "@/app/components/Button";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { HiOutlineBadgeCheck, HiOutlineDownload } from "react-icons/hi";

export const ActivatedAccount: React.FC<{ mode: "create" | "import" }> = ({
  mode,
}) => {
  const router = useRouter();

  const { t } = useTranslation("account");

  const tStepActivated = (tag: string) =>
    t(`new-account.${mode === "create" ? "activated" : "imported"}.${tag}`);

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl text-primary mb-8 font-extrabold uppercase">
        {tStepActivated("account-activated")}
      </p>
      {mode === "create" ? (
        <HiOutlineBadgeCheck
          size={160}
          className="text-primary animate-wiggle"
        />
      ) : (
        <HiOutlineDownload size={160} className="text-primary animate-bounce" />
      )}
      <p className="text-lg text-primary my-4 leading-5 text-center">
        {tStepActivated("account-activated-desc")}
      </p>
      <Button
        label={tStepActivated("go-to-dashboard")}
        variant="primary"
        className="w-full mt-4 text-xl font-bold"
        onClick={() => router.push("/")}
      />
    </div>
  );
};
