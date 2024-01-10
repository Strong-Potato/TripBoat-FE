import { useForm } from "react-hook-form";

import styles from "./SignupForm.module.scss";

import StepEmail from "./Step/StepEmail";

interface SignupFormProps {
  signupStep: string;
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
}

interface SignupForm {
  email: string;
  emailSert: string;
  password: string;
  passwordConfirm: string;
  profile: string;
}

function SignupForm({ signupStep, setSignupStep }: SignupFormProps) {
  const {
    register,
    resetField,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm<SignupForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

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

      {signupStep === "email" && (
        <StepEmail
          label="아이디(이메일 주소)"
          register={register}
          resetField={resetField}
          dirty={dirtyFields.email}
          error={errors.email}
        />
      )}

      {signupStep === "emailSert" && <section>password</section>}

      {signupStep === "password" && <section>password</section>}

      {signupStep === "profile" && <section>profile</section>}
    </form>
  );
}

export default SignupForm;
