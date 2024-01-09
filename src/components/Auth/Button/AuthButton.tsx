import styles from "./AuthButton.module.scss";

interface SignupButton {
  content: string;
  type: "button" | "reset" | "submit" | undefined;
  disabled: boolean;
  onClick?: () => void;
}

function SignupButton({ content, type, disabled, onClick }: SignupButton) {
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

export default SignupButton;
