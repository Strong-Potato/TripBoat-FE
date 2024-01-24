import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import validationForm from "@/utils/inputValidation";

import InputEmail from "./LoginInput/InputEmail";
import InputPassword from "./LoginInput/InputPassword";

import { AuthForm } from "@/types/auth";

function LoginForm() {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<AuthForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const [validationError, setValidationError] = useState<boolean>(false);

  const showError = (email: string, password: string) => {
    const isValid =
      validationForm.email.test(email) &&
      validationForm.password.test(password);

    if (!isValid) {
      setValidationError(true);
      return true;
    }

    return false;
  };

  const onSubmit: SubmitHandler<AuthForm> = async (data) => {
    const { email, password } = data;

    if (showError(email as string, password as string)) return;

    try {
      const res = await axios.post(
        "/api/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      console.log(res.data);

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      console.log("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <InputEmail
        label="이메일"
        register={register}
        resetField={resetField}
        dirtyFields={dirtyFields}
      />

      <InputPassword
        label="비밀번호"
        register={register}
        resetField={resetField}
        dirtyFields={dirtyFields}
      />

      {validationError ? (
        <small>이메일 또는 비밀번호를 확인해주세요.</small>
      ) : null}

      <AuthButton content="로그인" type="submit" disabled={false} />
    </form>
  );
}

export default LoginForm;
