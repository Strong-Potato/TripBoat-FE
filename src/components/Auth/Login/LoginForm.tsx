import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import validationForm from "@/utils/inputValidation";

import InputEmail from "./Input/InputEmail";
import InputPassword from "./Input/InputPassword";

import { LoginForm } from "@/types/auth";

function LoginForm() {
  const {
    register,
    resetField,
    getValues,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<LoginForm>({
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
      return;
    }
  };

  const onSubmit = async () => {
    const { email, password } = getValues();

    showError(email, password);

    try {
      const res = await axios.post("https://api.tripvote.site/login", {
        email,
        password,
      });
      console.log(res);

      navigate("/", { replace: true });
    } catch {
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
