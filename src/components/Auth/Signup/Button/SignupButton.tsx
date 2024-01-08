import styles from "./SignupButton.module.scss";

interface SignupButton {
  onClick: () => void;
  content: string;
  disabled: boolean;
}

function SignupButton({ onClick, content, disabled }: SignupButton) {
  return (
    <button
      className={styles.container}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default SignupButton;
