import { Status } from "@/bff/types/status";
import { WelcomeDialog } from "@/features/home/WelcomeDialog";
import { ChildrenProps } from "../../types/ChildrenProps";

interface Props {
  status: Status;
}

export const Home: React.FC<Props> = ({ status }) => {
  return (
    <div className="my-5">
      <h1 className="sm:text-lg font-bold">Signum PWA Wallet</h1>
    </div>
  );
};
