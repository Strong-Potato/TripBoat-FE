import { atom } from "recoil";

export const isRegistrationSelectedState = atom<string[]>({
  key: "isRegistrationSelectedState",
  default: [],
});
