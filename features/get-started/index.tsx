import { Button } from "@/app/components/Button";
import { HiOutlineIdentification, HiOutlineUserAdd } from "react-icons/hi";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

export const GetStarted: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("getStarted");

  return (
    <div className="my-5 flex flex-col items-center">
      <div className="text-center">
        <Image
          src="/assets/img/logo.png"
          alt="Signum Wallet logo"
          width={70}
          height={70}
        />
        <h1 className="text-[30px] font-bold uppercase text-default">
          {t("title")}
        </h1>

        <h2 className="sm:text-[20px] mt-5 mb-3 uppercase text-default">
          {t("getAccount")}
        </h2>
      </div>

      <Button
        label={t("start.create")}
        variant="default"
        Icon={HiOutlineUserAdd}
        iconPlacement="top"
        iconSize="md"
        className="uppercase py-9 px-9 w-40"
        onClick={() => router.push("/create-account")}
      />
      <Button
        label={t("start.import")}
        variant="default"
        outline
        Icon={HiOutlineIdentification}
        iconPlacement="top"
        iconSize="md"
        className="uppercase py-9 px-9 w-40 mt-4"
        onClick={() => router.push("/import-account")}
      />

      <p className="text-[13px] text-default mt-8 text-center">
        {t("start.info-text")}
      </p>
    </div>
  );
};
