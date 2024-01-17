import axios from "axios";

import styles from "./Step.module.scss";

import AuthButton from "../../Button/AuthButton";
import InputEmail from "../../Input/InputEmail";

import { StepEmailProps } from "@/types/auth";

function StepEmail({
  setFindPasswordStep,
  register,
  watchFields: { email },
  dirty,
  error,
  resetField,
}: StepEmailProps) {
  const onClickEmail = async () => {
    try {
      const res = await axios.post(
        "/api/auth/modify/lost-password/send-email",
        {
          email,
        },
      );
      console.log(res);

      setFindPasswordStep!("emailSert");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.container}>
      <h2>비밀번호를 잊으셨나요?</h2>

      <div className={styles.desc}>
        트립보트에 가입했던 이메일을 입력해주세요.
        <br />
        비밀번호 재설정을 위한 인증 코드를 보내드릴게요.
      </div>

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
