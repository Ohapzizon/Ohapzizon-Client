import { atom } from "recoil";

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
