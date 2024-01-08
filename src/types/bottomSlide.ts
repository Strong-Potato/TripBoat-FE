import { ReactNode } from "react";

export interface BottomSlideProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}