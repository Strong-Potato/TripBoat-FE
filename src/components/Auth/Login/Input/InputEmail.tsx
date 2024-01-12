import styles from "./Input.module.scss";

import InputRemove from "@/assets/icons/InputRemove.svg?react";
import validationForm from "@/utils/inputValidation";

import { LoginInput } from "@/types/auth";

function InputEmail({ label, register, dirtyFields, resetField }: LoginInput) {
  const resetEmail = () => {
    resetField("email");
  };

  return (
    <section className={styles.container}>
      <label htmlFor="email">{label}</label>

      <input
        id="email"
        className={styles.input}
        type="text"
        placeholder="이메일 주소를 입력해주세요"
        {...register("email", {
          pattern: {
            value: validationForm.email,
            message: "이메일 형식이 올바르지 않습니다.",
          },
        })}
      />

      {dirtyFields.email && (
        <button
          type="button"
          className={styles.removeBtn}
          onClick={resetEmail}
          tabIndex={-1}
        >
          <InputRemove className={styles.svg} />
        </button>
      )}
    </section>
  );
}

export default InputEmail;
