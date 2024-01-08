import styles from "./SignupForm.module.scss";

function SignupForm({ signupStep, setSignupStep }) {
  return (
    <form className={styles.container}>
      <div className={styles.bar}></div>
      <div
        className={`${styles.bar}
          ${
            signupStep === "email"
              ? styles.step_email
              : signupStep === "emailSert"
                ? styles.step_emailSert
                : signupStep === "password"
                  ? styles.step_password
                  : styles.step_profile
          }
        `}
      ></div>

      {signupStep === "email"}

      <button type="button" onClick={() => setSignupStep("emailSert")}>
        toEmailSert
      </button>
      <button
        type="button"
        onClick={() => {
          setSignupStep("password");
        }}
      >
        password
      </button>
      <button
        type="button"
        onClick={() => {
          setSignupStep("profile");
        }}
      >
        profile
      </button>

      {signupStep === "emailSert" && <section>password</section>}

      {signupStep === "password" && <section>password</section>}

      {signupStep === "profile" && <section>profile</section>}
    </form>
  );
}

export default SignupForm;
