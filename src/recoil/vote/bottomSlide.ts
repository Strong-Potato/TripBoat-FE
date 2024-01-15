import { ReactNode } from "react";
import { atom } from "recoil";

export interface BottomSlideContentState {
  content: ReactNode | null;
}

export const bottomSlideContentState = atom<BottomSlideContentState>({
  key: "bottomSlideContentState",
  default: {
    content: null,
  },
});

export const isBottomSlideOpenState = atom<boolean>({
  key: "isBottomSlideOpenState",
  default: false,
});
