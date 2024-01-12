import { useEffect } from "react";

const useLockBodyScroll = (modalOpen: boolean) => {
  useEffect(() => {
    if (modalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [modalOpen]);
};

export default useLockBodyScroll;
