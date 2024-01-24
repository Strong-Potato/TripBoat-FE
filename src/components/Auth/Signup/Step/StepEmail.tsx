import axios from "axios";

import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";
import InputEmail from "@/components/Auth/Input/InputEmail";
import CustomToast from "@/components/CustomToast/CustomToast";

import { StepEmailProps } from "@/types/auth";

function StepEmail({
  setSignupStep,
  register,
  watchFields: { email },
  dirty,
  error,
  resetField,
}: StepEmailProps) {
  const showToast = CustomToast();

  const onClickEmail = async () => {
    try {
      const res = await axios.post("/api/auth/register/send-email", {
        email,
      });
      console.log(res);

      if (res.data.response_code === 401) {
        showToast("이미 가입된 이메일입니다.");
        return;
      }

      setSignupStep!("emailSert");
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

      <InputEmail
        register={register}
        dirty={dirty}
        error={error}
        resetField={resetField}
      />

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
