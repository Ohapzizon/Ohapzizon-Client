import { atom } from "recoil";
import { ThemeEnums } from "../enum/ThemeEnums";
import { getTheme } from "../Util/GetTheme";

export const isOpen = atom<boolean>({
  key: "isOpen",
  default: false,
});

export const isWriteModalOpen = atom<boolean>({
  key: "isWriteModalOpen",
  default: false,
});

export const isLoginModalOpen = atom<boolean>({
  key: "isLoginModalOpen",
  default: false,
});

export const themeMode = atom<ThemeEnums>({
  key: "themeMode",
  default: getTheme(),
});

export const isModifyModalOpen = atom<boolean>({
  key: "isModifyModalOpen",
  default: false,
});

export const isModify = atom<boolean>({
  key: "isModify",
  default: false,
});
