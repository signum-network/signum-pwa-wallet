import localforage from "localforage";

localforage.config({
  name: "signum_wallet",
  version: 1,
  storeName: "signum",
});

export const storage = localforage;
