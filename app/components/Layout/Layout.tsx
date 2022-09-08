import { Fragment, FC, useEffect } from "react";
import { useRouter } from "next/router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ChildrenProps } from "../../../types/ChildrenProps";

export const Layout: FC<ChildrenProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, easing: "ease", speed: 400 });

    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

    router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }, []);

  return (
    <section className="min-h-[100vh] flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-[500px] min-h-[inherit] flex p-3 print:max-w-none">
        {children}
      </div>
    </section>
  );
};
