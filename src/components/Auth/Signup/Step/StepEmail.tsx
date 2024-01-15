import axios from "axios";

import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import InputRemove from "@/assets/icons/InputRemove.svg?react";
import validationForm from "@/utils/inputValidation";

import AuthToast from "../Toast/AuthToast";

import { StepEmailProps } from "@/types/auth";

function StepEmail({
  setSignupStep,
  register,
  watchFields: { email },
  dirty,
  error,
  resetField,
  showToast,
  toast,
}: StepEmailProps) {
  const resetEmail = () => {
    resetField("email");
  };

  const onClickEmail = async () => {
    try {
      const res = await axios.post(
        "https://api.tripvote.site/auth/register/send-email",
        {
          email,
        },
      );
      console.log(res);

      if (res.data.response_code === 401) {
        showToast("이미 가입된 이메일입니다.");
        return;
      }

      setSignupStep("emailSert");
    } catch (error) {
      console.log(error);
    }
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

      {toast && <AuthToast content={toast} />}
    </section>
  );
}

export default StepEmail;
