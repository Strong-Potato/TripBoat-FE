import { atom } from "recoil";

export const isModalOpenState = atom<boolean>({
  key: "isModalOpenState",
  default: false,
});

export const isCandidateSelectingState = atom<boolean>({
  key: "isCandidateSelectingState",
  default: false,
});
