import { useEffect, useState } from "react";

import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import validationForm from "@/utils/inputValidation";

import { StepEmailSertProps } from "@/types/auth";

function StepEmailSert({
  setSignupStep,
  register,
  email,
  dirty,
  error,
}: StepEmailSertProps) {
  const [due, setDue] = useState<number>(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setDue((count) => count - 1);
    }, 1000);

    if (due === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [due]);

  const onClickEmailSert = () => {
    setSignupStep("password");

    /*api 요청
    성공 {
    setSignupStep("password");
    
    } 실패 {
    
    
    }
    */
  };

  const onClickEmailResert = () => {
    // 이메일 요청 인증코드 재전송 API
    //
    //
    // 성공하면 시간 초기화
    setDue(1800);
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
          maxLength={6}
          placeholder="인증코드 6자리를 입력해주세요"
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
          <p className={styles.emailReSert__timein}>
            인증 코드를 못 받으셨나요?
          </p>
        )}

        <button
          className={styles.emailReSert__btn}
          type="button"
          onClick={onClickEmailResert}
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
    </section>
  );
}

export default StepEmailSert;
