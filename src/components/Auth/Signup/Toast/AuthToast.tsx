import { createPortal } from "react-dom";

import styles from "./AuthToast.module.scss";

interface AuthToastProps {
  content: string;
}

function AuthToast({ content }: AuthToastProps) {
  const rootEl = document.getElementById("root");

  if (!rootEl) throw new Error("Failed to find the root element");

  return (
    <>
      {createPortal(
        <div className={styles.container}>
          <div className={styles.toast}>{content}</div>
        </div>,
        rootEl,
      )}
    </>
  );
}

export default AuthToast;
