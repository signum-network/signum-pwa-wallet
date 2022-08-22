import { useState, FC, useCallback } from "react";
import { Dialog } from "@headlessui/react";
import { Status } from "@/bff/types/status";

interface Props {
  status: Status;
}

export const WelcomeDialog: FC<Props> = ({ status }) => {
  const [isOpen, setIsOpen] = useState(true);

  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={close}
      className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4"
    >
      <Dialog.Overlay />

      <Dialog.Title className="text-xl">Welcome to Fixcoin App</Dialog.Title>
      <Dialog.Description className="pt-2">
        Your app is set up
      </Dialog.Description>

      <p>Current Status: {status.status}</p>

      <p>Current environment: {process.env.NODE_ENV}</p>

      <div className="flex items-center justify-between mt-2">
        <button className="bg-amber-100 px-4 py-2 rounded-md" onClick={close}>
          Cool
        </button>
        <button className="bg-green-100 px-4 py-2 rounded-md" onClick={close}>
          Let's go
        </button>
      </div>
    </Dialog>
  );
};
