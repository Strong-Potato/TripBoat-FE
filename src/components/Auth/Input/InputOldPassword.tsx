import styles from "./Input.module.scss";

import validationForm from "@/utils/inputValidation";

function InputOldPassword({ register, dirtyFields, errors }) {
  return (
    <section className={styles.password}>
      <label htmlFor="oldPassword">비밀번호</label>

      <input
        id="password"
        type="password"
        className={`${styles.input} ${
          dirtyFields?.oldPassword && errors?.oldPassword ? styles.error : ""
        }`}
        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
        {...register("oldPassword", {
          required: true,
          pattern: {
            value: validationForm.password,
            message: "비밀번호 형식이 올바르지 않습니다.",
          },
        })}
      />

      {!dirtyFields?.oldPassword || errors?.oldPassword ? (
        <small>{errors?.oldPassword?.message}</small>
      ) : null}
    </section>
  );
}

export default InputOldPassword;
