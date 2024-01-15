import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./SignupForm.module.scss";

import StepEmail from "./Step/StepEmail";
import StepEmailSert from "./Step/StepEmailSert";
import StepPassword from "./Step/StepPassword";
import StepProfile from "./Step/StepProfile";

import { SignupForm, SignupFormProps } from "@/types/auth";

function SignupForm({ signupStep, setSignupStep }: SignupFormProps) {
  const {
    register,
    resetField,
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

  const navigate = useNavigate();
  const [toast, setToast] = useState<string | null>(null);
  const watchFields = watch();

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 1500);
  };

  const onSubmit: SubmitHandler<SignupForm> = async (data) => {
    if (Object.keys(dirtyFields).length < 5) return;
    console.log(data);

    try {
      const { email, emailSert, password, image, nickname } = data;
      const res = await axios.post("https://api.tripvote.site/auth/register", {
        email,
        password,
        nickname,
        profile: image,
        token: emailSert,
      });
      console.log(res);

      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
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
          watchFields={watchFields}
          resetField={resetField}
          dirty={dirtyFields.email}
          error={errors.email}
          showToast={showToast}
          toast={toast}
        />
      )}

      {signupStep === "emailSert" && (
        <StepEmailSert
          setSignupStep={setSignupStep}
          register={register}
          watchFields={watchFields}
          dirty={dirtyFields.emailSert}
          error={errors.emailSert}
          showToast={showToast}
          toast={toast}
        />
      )}

      {signupStep === "password" && (
        <StepPassword
          setSignupStep={setSignupStep}
          register={register}
          resetField={resetField}
          watchFields={watchFields}
          dirtyFields={dirtyFields}
          errors={errors}
          showToast={showToast}
          toast={toast}
        />
      )}

      {signupStep === "profile" && (
        <StepProfile
          register={register}
          resetField={resetField}
          dirty={dirtyFields.nickname}
          error={errors.nickname}
        />
      )}
    </form>
  );
}

export default SignupForm;
