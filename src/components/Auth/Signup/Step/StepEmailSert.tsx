import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";
import InputEmailSert from "@/components/Auth/Input/InputEmailSert";

import { StepEmailSertProps } from "@/types/auth";

function StepEmailSert({
  setSignupStep,
  register,
  watchFields: { email, emailSert },
  dirty,
  error,
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
        // showToast "인증코드가 일치하지 않습니다."
        return;
      }

      setSignupStep("password");
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

      <InputEmailSert
        register={register}
        email={email}
        due={due}
        setDue={setDue}
      />

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
