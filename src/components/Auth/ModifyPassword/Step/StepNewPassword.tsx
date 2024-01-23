import styles from "./Step.module.scss";

import AuthButton from "../../Button/AuthButton";
import InputPassword from "../../Input/InputPassword";
import InputPasswordConfirm from "../../Input/InputPasswordConfirm";

import { StepPasswordProps } from "@/types/auth";

function StepNewPassword({
  register,
  resetField,
  watchFields: { password, passwordConfirm },
  dirtyFields,
  errors,
}: StepPasswordProps) {
  return (
    <section className={styles.container}>
      <h2>새로운 비밀번호를 설정해주세요</h2>

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
        type="submit"
      />
    </section>
  );
}

export default StepNewPassword;
