import {
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
} from "react-hook-form";

import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import InputRemove from "@/assets/icons/InputRemove.svg?react";
import validationForm from "@/utils/inputValidation";

interface SignupForm {
  email: string;
  emailSert: string;
  password: string;
  passwordConfirm: string;
  image: string;
  nickname: string;
}

interface DirtyFields {
  email?: boolean;
  emailSert?: boolean;
  password?: boolean;
  passwordConfirm?: boolean;
  image?: boolean;
  nickname?: boolean;
}

interface StepPasswordProps {
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegister<SignupForm>;
  resetField: UseFormResetField<SignupForm>;
  password: string;
  dirtyFields?: DirtyFields;
  errors?: FieldErrors<SignupForm>;
}

function StepPassword({
  setSignupStep,
  register,
  resetField,
  password,
  dirtyFields,
  errors,
}: StepPasswordProps) {
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
            dirtyFields?.passwordConfirm && errors?.passwordConfirm
              ? styles.error
              : ""
          }`}
          placeholder="비밀번호를 한번 더 입력해주세요"
          {...register("passwordConfirm", {
            required: true,
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
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

        {!dirtyFields?.passwordConfirm || errors?.passwordConfirm ? (
          <small>{errors?.passwordConfirm?.message}</small>
        ) : null}
      </section>

      <AuthButton
        content="완료"
        disabled={
          !dirtyFields?.password ||
          !dirtyFields?.passwordConfirm ||
          errors?.password ||
          errors?.passwordConfirm
            ? true
            : false
        }
        type="button"
        onClick={onClickPassword}
      />
    </section>
  );
}

export default StepPassword;
