import { useEffect } from "react";

import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import InputRemove from "@/assets/icons/InputRemove.svg?react";
import validationForm from "@/utils/inputValidation";

import AuthToast from "../Toast/AuthToast";

import { StepPasswordProps } from "@/types/auth";

function StepPassword({
  setSignupStep,
  register,
  resetField,
  watchFields: { password, passwordConfirm },
  dirtyFields,
  errors,
  showToast,
  toast,
}: StepPasswordProps) {
  useEffect(() => {
    showToast("인증이 완료되었습니다.");
  }, []);

  const resetPassword = () => {
    resetField("password");
  };

  const resetPasswordConfirm = () => {
    resetField("passwordConfirm");
  };

  const onClickPassword = () => {
    setSignupStep("profile");
  };

  return (
    <section className={styles.container}>
      <h2>
        로그인에 사용할
        <br />
        비밀번호를 입력해주세요
      </h2>

      <section className={styles.password}>
        <label htmlFor="password">비밀번호</label>

        <input
          id="password"
          type="password"
          className={`${styles.input} ${
            dirtyFields?.password && errors?.password ? styles.error : ""
          }`}
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          {...register("password", {
            required: true,
            pattern: {
              value: validationForm.password,
              message: "비밀번호 형식이 올바르지 않습니다.",
            },
          })}
        />

        {dirtyFields?.password && (
          <button
            type="button"
            className={styles.removeBtn}
            onClick={resetPassword}
            tabIndex={-1}
          >
            <InputRemove className={styles.svg} />
          </button>
        )}

        {!dirtyFields?.password || errors?.password ? (
          <small>{errors?.password?.message}</small>
        ) : null}
      </section>

      <section className={styles.passwordConfirm}>
        <label htmlFor="passwordConfirm">비밀번호 확인</label>

        <input
          id="passwordConfirm"
          type="password"
          className={`${styles.input} ${
            dirtyFields?.passwordConfirm && password !== passwordConfirm
              ? styles.error
              : ""
          }`}
          placeholder="비밀번호를 한번 더 입력해주세요"
          {...register("passwordConfirm", {
            required: true,
          })}
        />

        {dirtyFields?.passwordConfirm && (
          <button
            type="button"
            className={styles.removeBtn}
            onClick={resetPasswordConfirm}
            tabIndex={-1}
          >
            <InputRemove className={styles.svg} />
          </button>
        )}

        {dirtyFields?.passwordConfirm && password !== passwordConfirm ? (
          <small>비밀번호가 일치하지 않습니다.</small>
        ) : null}
      </section>

      <AuthButton
        content="완료"
        disabled={
          !dirtyFields?.password ||
          !dirtyFields?.passwordConfirm ||
          errors?.password ||
          password !== passwordConfirm
            ? true
            : false
        }
        type="button"
        onClick={onClickPassword}
      />

      {toast && <AuthToast content={toast} />}
    </section>
  );
}

export default StepPassword;
