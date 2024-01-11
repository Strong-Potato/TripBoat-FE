import {
  FieldError,
  UseFormRegister,
  UseFormResetField,
} from "react-hook-form";

import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import Camera from "@/assets/icons/camera.svg?react";
import InputRemove from "@/assets/icons/InputRemove.svg?react";
import validationForm from "@/utils/inputValidation";

interface SignupForm {
  email: string;
  emailSert: string;
  password: string;
  passwordConfirm: string;
  image: FileList;
  nickname: string;
}

interface StepProfileProps {
  register: UseFormRegister<SignupForm>;
  resetField: UseFormResetField<SignupForm>;
  image: FileList;
  dirty?: boolean;
  error?: FieldError;
}

function StepProfile({
  register,
  resetField,
  image,
  dirty,
  error,
}: StepProfileProps) {
  const resetNickname = () => {
    resetField("nickname");
  };

  return (
    <section className={styles.container}>
      <h2>프로필을 설정해주세요</h2>

      <section className={styles.image}>
        <label
          htmlFor="image"
          className={styles.image__label}
          style={
            image
              ? {
                  backgroundImage: `url(${URL.createObjectURL(image[0])})`,
                }
              : undefined
          }
        >
          <div className={styles.image__label__camera}>
            <Camera width={16} height={16} />
          </div>
        </label>

        <input
          id="image"
          type="file"
          className={styles.image__input}
          accept="image/*"
          {...register("image", {})}
        />
      </section>

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

      <AuthButton
        content="시작하기"
        disabled={!dirty || error ? true : false}
        type="submit"
      />
    </section>
  );
}

export default StepProfile;
