import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import InputRemove from "@/assets/icons/InputRemove.svg?react";
import validationForm from "@/utils/inputValidation";

import { SignupInput } from "@/types/auth";

function StepEmail({ label, register, dirty, error, resetField }: SignupInput) {
  const resetEmail = () => {
    resetField("email");
  };

  const onClickEmail = () => {
    console.log("이메일 인증 요청");
    console.log(error);
  };

  return (
    <section className={styles.container}>
      <h2>
        로그인에 사용할
        <br />
        이메일을 입력해주세요
      </h2>

      <label htmlFor="email">{label}</label>

      <input
        id="email"
        className={`${styles.input} ${error ? styles.error : ""}`}
        type="text"
        placeholder="이메일 주소를 입력해주세요"
        {...register("email", {
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
