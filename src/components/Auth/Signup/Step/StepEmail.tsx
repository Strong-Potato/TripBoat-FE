import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import InputRemove from "@/assets/icons/InputRemove.svg?react";
import validationForm from "@/utils/inputValidation";

import { StepEmailProps } from "@/types/auth";

function StepEmail({
  setSignupStep,
  register,
  dirty,
  error,
  resetField,
}: StepEmailProps) {
  const resetEmail = () => {
    resetField("email");
  };

  const onClickEmail = () => {
    setSignupStep("emailSert");
  };

  return (
    <section className={styles.container}>
      <h2>
        로그인에 사용할
        <br />
        이메일을 입력해주세요
      </h2>

      <section className={styles.email}>
        <label htmlFor="email">아이디(이메일 주소)</label>

        <input
          id="email"
          className={`${styles.input} ${dirty && error ? styles.error : ""}`}
          type="text"
          placeholder="이메일 주소를 입력해주세요"
          {...register("email", {
            required: true,
            pattern: {
              value: validationForm.email,
              message: "이메일 형식이 올바르지 않습니다.",
            },
          })}
        />

        {dirty && (
          <button
            type="button"
            className={styles.removeBtn}
            onClick={resetEmail}
            tabIndex={-1}
          >
            <InputRemove className={styles.svg} />
          </button>
        )}

        {!dirty || error ? <small>{error?.message}</small> : null}
      </section>

      <AuthButton
        content="이메일 인증 요청"
        disabled={!dirty || error ? true : false}
        type="button"
        onClick={onClickEmail}
      />
    </section>
  );
}

export default StepEmail;
