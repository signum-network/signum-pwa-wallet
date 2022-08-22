import React from "react";
import { ChildrenProps } from "@/types/ChildrenProps";

interface Props {
  href: string;
}

export const SafeExternalLink: React.FC<Props & ChildrenProps> = ({
  href,
  children,
}) => (
  <a
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    style={{ textDecoration: "none" }}
  >
    {children}
  </a>
);
