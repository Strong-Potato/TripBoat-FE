import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";
import InputPassword from "@/components/Auth/Input/InputPassword";
import InputPasswordConfirm from "@/components/Auth/Input/InputPasswordConfirm";

import { StepPasswordProps } from "@/types/auth";

function StepPassword({
  setSignupStep,
  register,
  resetField,
  watchFields: { password, passwordConfirm },
  dirtyFields,
  errors,
}: StepPasswordProps) {
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

      <InputPassword
        register={register}
        dirtyFields={dirtyFields}
        errors={errors}
        resetField={resetField}
      />

      <InputPasswordConfirm
        register={register}
        password={password}
        passwordConfirm={passwordConfirm}
        dirtyFields={dirtyFields}
        resetField={resetField}
      />

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
    </section>
  );
}

export default StepPassword;
