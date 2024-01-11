import styles from "./AuthButton.module.scss";

import { AuthButtonProps } from "@/types/auth";

function AuthButton({ content, type, disabled, onClick }: AuthButtonProps) {
  return (
    <button
      className={styles.container}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default AuthButton;
