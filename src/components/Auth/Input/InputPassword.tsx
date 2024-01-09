import styles from "./Input.module.scss";

import RemoveBtn from "@/assets/icons/removeBtn.svg?react";
import validationForm from "@/utils/inputValidation";

import { LoginInput } from "@/types/auth";

function InputPassword({
  label,
  register,
  dirtyFields,
  resetField,
}: LoginInput) {
  const resetPassword = () => {
    resetField("password");
  };

  return (
    <section className={styles.container}>
      <label htmlFor="password">{label}</label>

      <input
        id="password"
        className={styles.input}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        {...register("password", {
          pattern: {
            value: validationForm.password,
            message: "비밀번호 형식이 올바르지 않습니다.",
          },
        })}
      />

      {dirtyFields.password && (
        <button
          type="button"
          className={styles.removeBtn}
          onClick={resetPassword}
          tabIndex={-1}
        >
          <RemoveBtn className={styles.svg} />
        </button>
      )}
    </section>
  );
}

export default InputPassword;
