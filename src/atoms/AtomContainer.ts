import { atom } from "recoil";

export const isOpened = atom<boolean>({
  key: "isOpened",
  default: false,
});
