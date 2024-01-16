import { atom } from "recoil";

import { AlertModalProps } from "@/types/vote";

export const isModalOpenState = atom<boolean>({
  key: "isModalOpenState",
  default: false,
});

export const isCandidateSelectingState = atom<boolean>({
  key: "isCandidateSelectingState",
  default: false,
});

export const modalContentState = atom<AlertModalProps>({
  key: "modalContentState",
  default: {
    title: "",
    subText: "",
    actionButton: "",
    isSmallSize: false,
    onClickAction: () => {},
  },
});
