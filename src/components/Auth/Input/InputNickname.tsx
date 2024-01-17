import styles from "./Input.module.scss";

import InputRemove from "@/assets/icons/InputRemove.svg?react";
import validationForm from "@/utils/inputValidation";

import { InputNickname } from "@/types/auth";

function InputNickname({ register, dirty, error, resetField }: InputNickname) {
  const resetNickname = () => {
    resetField("nickname");
  };

  return (
    <section className={styles.nickname}>
      <label htmlFor="nickname">닉네임</label>

      <p className={styles.nickname__disc}>
        일행 간 구분을 위해 본인을 잘 나타낼 수 있는 닉네임을 권장해요.
      </p>

      <input
        id="nickname"
        className={`${styles.input} ${dirty && error ? styles.error : ""}`}
        type="text"
        placeholder="영어/한글/숫자 최대 10자 (공백 포함)"
        {...register("nickname", {
          required: true,
          pattern: {
            value: validationForm.nickname,
            message: "닉네임 형식을 확인해주세요.",
          },
        })}
      />

      {dirty && (
        <button
          type="button"
          className={styles.removeBtn}
          onClick={resetNickname}
          tabIndex={-1}
        >
          <InputRemove className={styles.svg} />
        </button>
      )}

      {!dirty || error ? <small>{error?.message}</small> : null}
    </section>
  );
}

export default InputNickname;
