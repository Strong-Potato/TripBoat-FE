import { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./LoginForm.module.scss";

import InputEmail from "../Input/InputEmail";
import InputPassword from "../Input/InputPassword";

interface Form {
  email: string;
  password: string;
}

interface SubmitResult {
  try: boolean;
  isPassed: boolean;
}

function LoginForm() {
  const {
    register,
    resetField,
    formState: { errors, dirtyFields },
  } = useForm<Form>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [submitResult, setSubmitResult] = useState<SubmitResult>({
    try: false,
    isPassed: false,
  });

  const clickLogin = () => {
    setSubmitResult({ ...submitResult, try: true });

    const isError = Object.keys(errors).length > 0;
    if (isError) {
      setSubmitResult({ try: true, isPassed: false });
      return;
    }

    setSubmitResult({ try: true, isPassed: true });

    // 이메일 비밀번호 validation 성공
    // 로그인 api 요청
    /*
     *
     *
     *
     */
  };

  return (
    <form className={styles.container}>
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

      {submitResult.try && !submitResult.isPassed ? (
        <small>이메일 또는 비밀번호를 확인해주세요.</small>
      ) : null}

      <button className={styles.submitBtn} type="button" onClick={clickLogin}>
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
