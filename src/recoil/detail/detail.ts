import { atom } from "recoil";

export const isRegistrationSelectedState = atom<string[]>({
  key: "isRegistrationSelectedState",
  default: [],
});

export const DatePickerState = atom<Date>({
  key: "DatePickerState",
  default: new Date(),
});

export const DatePickerIsValued = atom<boolean>({
  key: "DatePickerIsValued",
  default: false,
});
