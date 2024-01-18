import styles from "./Input.module.scss";

import InputRemove from "@/assets/icons/InputRemove.svg?react";

import { InputPasswordConfirmProps } from "@/types/auth";

function InputPasswordConfirm({
  register,
  password,
  passwordConfirm,
  dirtyFields,
  resetField,
}: InputPasswordConfirmProps) {
  const resetPasswordConfirm = () => {
    resetField("passwordConfirm");
  };

  return (
    <section className={styles.passwordConfirm}>
      <label htmlFor="passwordConfirm">비밀번호 확인</label>

      <input
        id="passwordConfirm"
        type="password"
        className={`${styles.input} ${
          dirtyFields?.passwordConfirm && password !== passwordConfirm
            ? styles.error
            : ""
        }`}
        placeholder="비밀번호를 한번 더 입력해주세요"
        {...register("passwordConfirm", {
          required: true,
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

      {dirtyFields?.passwordConfirm && password !== passwordConfirm ? (
        <small>비밀번호가 일치하지 않습니다.</small>
      ) : null}
    </section>
  );
}

export default InputPasswordConfirm;
