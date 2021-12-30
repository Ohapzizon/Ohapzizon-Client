import { atom } from "recoil";
import { CheckTime } from "../Util/CheckTime";

export const isOpen = atom<boolean>({
  key: "isOpen",
  default: false,
});

export const theme = atom<string>({
  key: "theme",
  default: CheckTime(),
});
