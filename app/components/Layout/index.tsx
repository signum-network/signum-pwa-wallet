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

  // TODO: define the layout
  return <Fragment>{children}</Fragment>;
};
