import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./LoginForm.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import validationForm from "@/utils/inputValidation";

import InputEmail from "../Input/InputEmail";
import InputPassword from "../Input/InputPassword";

import { LoginForm } from "@/types/auth";

function LoginForm() {
  const {
    register,
    resetField,
    getValues,
    formState: { dirtyFields },
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [validationError, setValidationError] = useState<boolean>(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = getValues();
    const isValid =
      validationForm.email.test(email) &&
      validationForm.password.test(password);

    if (!isValid) {
      setValidationError(true);
      return;
    } else {
      setValidationError(false);
    }

    // 이메일 비밀번호 validation 성공
    // 로그인 api 요청
    /*
     *
     *
     *
     */
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
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
