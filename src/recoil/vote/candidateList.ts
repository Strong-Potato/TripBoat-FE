import { atom } from "recoil";

export const selectedCandidatesState = atom<Set<number>>({
  key: "selectedCandidatesState",
  default: new Set(),
});
