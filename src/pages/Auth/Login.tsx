import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import styles from "./Login.module.scss";

import RemoveBtn from "@/assets/icons/removeBtn.svg?react";
import KakaoIcon from "@/assets/kakao/kakao_path.svg?react";
import Logo from "@/assets/logo.svg?react";

interface Form {
  email: string;
  password: string;
}

interface SubmitResult {
  try: boolean;
  isPassed: boolean;
}

function Login() {
  const {
    register,
    getValues,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<Form>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [submitResult, setSubmitResult] = useState<SubmitResult>({
    try: false,
    isPassed: false,
  });

  const login = () => {
    setSubmitResult({ ...submitResult, try: true });

    const isError = Object.keys(errors).length > 0;
    if (isError) {
      setSubmitResult({ try: true, isPassed: false });
      return;
    }

    setSubmitResult({ try: true, isPassed: true });

    console.log(submitResult, "isError", isError, errors);
  };

  const resetEmail = () => {
    reset({ ...getValues(), email: "" });
  };

  const resetPassword = () => {
    reset({ ...getValues(), password: "" });
  };
  return (
    <div className={styles.container}>
      <h1 aria-hidden="true">
        <Logo />
      </h1>

      <form className={styles.loginForm}>
        <div className={styles.loginForm__email}>
          <label htmlFor="email">이메일</label>

          <input
            id="email"
            type="text"
            placeholder="abc@gmail.com"
            {...register("email", {
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
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
              <RemoveBtn className={styles.svg} />
            </button>
          )}
        </div>

        <div className={styles.loginForm__password}>
          <label htmlFor="password">비밀번호</label>

          <input
            id="password"
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
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
        </div>

        {submitResult.try && !submitResult.isPassed ? (
          <small>이메일 또는 비밀번호를 확인해주세요.</small>
        ) : null}

        <button
          className={styles.loginForm__submitBtn}
          type="button"
          onClick={login}
        >
          로그인
        </button>
      </form>

      <section className={styles.aboutAuth}>
        <Link to={""}>비밀번호를 잊으셨나요?</Link>
        <div className={styles.col_bar}></div>
        <Link to={""}>회원가입</Link>
      </section>

      <section className={styles.snsLogin}>
        <h2 className={styles.snsLogin__head}>
          <div className={styles.row_bar}></div>
          <p>SNS 계정으로 로그인</p>
          <div className={styles.row_bar}></div>
        </h2>

        <button type="button" className={styles.snsLogin__btn}>
          <KakaoIcon />
          <span className={styles.kakao_text}>카카오 로그인</span>
          <span className={styles.kakao_space} aria-hidden></span>
        </button>
      </section>

      <div className={styles.bottom}>
        <Link to={""} className={styles.bottom__toHome}>
          로그인 전 둘러보기
        </Link>
      </div>
    </div>
  );
}

export default Login;
