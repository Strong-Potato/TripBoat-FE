import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./SignupForm.module.scss";

import StepEmail from "@/components/Auth/Signup/Step/StepEmail";
import StepEmailSert from "@/components/Auth/Signup/Step/StepEmailSert";
import StepPassword from "@/components/Auth/Signup/Step/StepPassword";
import StepProfile from "@/components/Auth/Signup/Step/StepProfile";

import { AuthForm, SignupFormProps } from "@/types/auth";

function SignupForm({ signupStep, setSignupStep }: SignupFormProps) {
  const {
    register,
    resetField,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<AuthForm>({
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

  const [code, setCode] = useState<string>("");
  const navigate = useNavigate();
  const watchFields = watch();

  const onSubmit: SubmitHandler<AuthForm> = async (data) => {
    console.log(code);
    if (Object.keys(dirtyFields).length < 5) return;
    console.log(data);

    try {
      const { email, password, image, nickname } = data;
      const res = await axios.post("/api/auth/register", {
        email,
        password,
        nickname,
        token: code,
      });
      console.log(res);

      navigate("/auth/login", { replace: true });
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
        />
      )}

      {signupStep === "emailSert" && (
        <StepEmailSert
          setSignupStep={setSignupStep}
          register={register}
          watchFields={watchFields}
          dirty={dirtyFields.emailSert}
          error={errors.emailSert}
          setCode={setCode}
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
