import { UseFormRegister, UseFormResetField } from "react-hook-form";

import styles from "./Input.module.scss";

import RemoveBtn from "@/assets/icons/removeBtn.svg?react";

interface LoginForm {
  email: string;
  password: string;
}

interface LoginDirtyFields {
  email?: boolean;
  password?: boolean;
}

interface Props {
  label: string;
  dirtyFields: LoginDirtyFields;
  register: UseFormRegister<LoginForm>;
  resetField: UseFormResetField<LoginForm>;
}

function InputPassword({ label, register, dirtyFields, resetField }: Props) {
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
            value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
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
