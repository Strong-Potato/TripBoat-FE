import styles from "./Input.module.scss";

import InputRemove from "@/assets/icons/InputRemove.svg?react";
import validationForm from "@/utils/inputValidation";

import { InputPasswordProps } from "@/types/auth";

function InputPassword({
  register,
  dirtyFields,
  errors,
  resetField,
}: InputPasswordProps) {
  const resetPassword = () => {
    resetField("password");
  };

  return (
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
  );
}

export default InputPassword;
