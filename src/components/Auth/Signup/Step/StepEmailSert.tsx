import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import validationForm from "@/utils/inputValidation";

import AuthToast from "../Toast/AuthToast";

import { StepEmailSertProps } from "@/types/auth";

function StepEmailSert({
  setSignupStep,
  register,
  watchFields: { email, emailSert },
  dirty,
  error,
  showToast,
  toast,
}: StepEmailSertProps) {
  const [due, setDue] = useState<number>(1800);

  useEffect(() => {
    const timer = setInterval(() => {
      setDue((count) => count - 1);
    }, 1000);

    if (due === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [due]);

  const onClickEmailSert = async () => {
    try {
      const res = await axios.post("/api/auth/register/check-token", {
        email,
        token: emailSert,
      });
      console.log(res);

      if (res.data.response_code === 403) {
        showToast("인증코드가 일치하지 않습니다.");
        return;
      }

      setSignupStep("password");
    } catch (error) {
      console.log(error);
    }
  };

  const onClickResert = async () => {
    try {
      const res = await axios.post("/api/auth/register/send-email", {
        email,
      });
      console.log(res);

      showToast("인증코드가 재전송 되었습니다.");
      setDue(1800);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.container}>
      <h2>
        이메일로 받은
        <br />
        인증코드를 입력해주세요
      </h2>

      <div className={styles.userEmail}>
        <p className={styles.userEmail__label}>이메일</p>
        <p className={styles.userEmail__email}>{email}</p>
      </div>

      <section className={styles.sertCode}>
        <label htmlFor="sertCode" className={styles.sertCode__label}>
          인증코드
        </label>

        <input
          id="sertCode"
          className={styles.input}
          type="text"
          maxLength={8}
          placeholder="인증코드 8자리를 입력해주세요"
          disabled={due === 0}
          {...register("emailSert", {
            required: true,
            pattern: {
              value: validationForm.emailSertCode,
              message: "인증코드 형식에 맞지 않습니다",
            },
          })}
        />

        <span
          className={`${styles.sertCode__due} ${
            due === 0 ? styles.timeout : ""
          }`}
        >{`${Math.floor(due / 60)}:${String(due % 60).padStart(2, "0")}`}</span>
      </section>

      <div className={styles.emailResert}>
        {due === 0 ? (
          <p className={styles.emailResert__timeout}>
            입력시간이 초과되었습니다
          </p>
        ) : (
          <p className={styles.emailResert__timein}>
            인증 코드를 못 받으셨나요?
          </p>
        )}

        <button
          className={styles.emailResert__btn}
          type="button"
          onClick={onClickResert}
        >
          인증 코드 재전송
        </button>
      </div>

      <AuthButton
        content="이메일 인증 완료"
        disabled={!dirty || due === 0 || error ? true : false}
        type="button"
        onClick={onClickEmailSert}
      />

      {toast && <AuthToast content={toast} />}
    </section>
  );
}

export default StepEmailSert;
