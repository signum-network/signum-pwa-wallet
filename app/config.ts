import { fetcher } from "@/app/fetcher";

const toNumber = (v: any): number => {
  const n = parseFloat(v);
  return Number.isNaN(n) ? -1 : n;
};

const toBoolean = (v: string): boolean => v.toLowerCase() === "true";

export const Config = {
  Fetcher: fetcher,
  SomeValue: process.env.NEXT_PUBLIC_IPFS_GATEWAY || "",
  IsSomething: toBoolean(process.env.NEXT_PUBLIC_YOUR_VAR_BOOL || ""),
  SomeNumber: toNumber(process.env.NEXT_PUBLIC_YOUR_VAR_NUMBER || "0"),
};
