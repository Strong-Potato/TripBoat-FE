import { useState } from "react";

import styles from "./Step.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";

import Camera from "@/assets/icons/camera.svg?react";
import InputRemove from "@/assets/icons/InputRemove.svg?react";
import profileDefault from "@/assets/profile_default.svg";
import validationForm from "@/utils/inputValidation";

import { StepProfileProps } from "@/types/auth";

function StepProfile({ register, resetField, dirty, error }: StepProfileProps) {
  const [imageUrl, setImageUrl] = useState(`${profileDefault}`);

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
          style={{ backgroundImage: `url(${imageUrl})` }}
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
          {...register("image", {
            onChange: (e) => {
              const file = e.target.files[0];
              const fileUrl = URL.createObjectURL(file);
              setImageUrl(fileUrl);
            },
          })}
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
