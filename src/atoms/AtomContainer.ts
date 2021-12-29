import { atom } from "recoil";

export const isOpen = atom<boolean>({
  key: "isOpen",
  default: false,
});
