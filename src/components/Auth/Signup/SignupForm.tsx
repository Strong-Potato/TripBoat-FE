import { useForm } from "react-hook-form";

import styles from "./SignupForm.module.scss";

import StepEmail from "./Step/StepEmail";
import StepEmailSert from "./Step/StepEmailSert";
import StepPassword from "./Step/StepPassword";
import StepProfile from "./Step/StepProfile";

interface SignupFormProps {
  signupStep: string;
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
}

interface SignupForm {
  email: string;
  emailSert: string;
  password: string;
  passwordConfirm: string;
  image: FileList;
  nickname: string;
}

function SignupForm({ signupStep, setSignupStep }: SignupFormProps) {
  const {
    register,
    resetField,
    getValues,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<SignupForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
      emailSert: "",
      password: "",
      passwordConfirm: "",
      image: undefined,
      nickname: "",
    },
  });

  const watchPassword = watch("password");
  const watchPasswordConfirm = watch("passwordConfirm");
  const watchImage = watch("image");

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
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
          setSignupStep={setSignupStep}
          register={register}
          resetField={resetField}
          dirty={dirtyFields.email}
          error={errors.email}
        />
      )}

      {signupStep === "emailSert" && (
        <StepEmailSert
          setSignupStep={setSignupStep}
          register={register}
          email={getValues("email")}
          dirty={dirtyFields.emailSert}
          error={errors.emailSert}
        />
      )}

      {signupStep === "password" && (
        <StepPassword
          setSignupStep={setSignupStep}
          register={register}
          resetField={resetField}
          password={watchPassword}
          passwordConfirm={watchPasswordConfirm}
          dirtyFields={dirtyFields}
          errors={errors}
        />
      )}

      {signupStep === "profile" && (
        <StepProfile
          register={register}
          resetField={resetField}
          image={watchImage}
          dirty={dirtyFields.nickname}
          error={errors.nickname}
        />
      )}
    </form>
  );
}

export default SignupForm;
