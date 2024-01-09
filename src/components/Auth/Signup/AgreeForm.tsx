import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import styles from "./AgreeForm.module.scss";

import SignupButton from "../Button/SignupButton";

import { AgreeForm, AgreeName, AgreeProps } from "@/types/auth";

function Agree({ setSignupStep }: AgreeProps) {
  const { register, getValues, setValue, handleSubmit, watch } =
    useForm<AgreeForm>({
      mode: "onChange",
    });

  const watchRequired = watch(["age", "service", "privacy"]);
  const watchAll = watch(["age", "service", "privacy", "marketing"]);

  useEffect(() => {
    if (watchAll.every((input) => input === true)) {
      setValue("allCheck", true);
    } else {
      setValue("allCheck", false);
    }
  });

  const clickAllCheck = () => {
    const inputs: AgreeName[] = ["age", "service", "privacy", "marketing"];

    if (getValues("allCheck")) {
      inputs.forEach((input) => {
        setValue(input, false);
      });
      return;
    }

    inputs.forEach((input) => {
      setValue(input, true);
    });
  };

  const onSubmit = () => {
    setSignupStep("email");
  };

  return (
    <section className={styles.container}>
      <h1>서비스 이용 동의</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.checkInput}>
          <input
            type="checkbox"
            id="allCheck"
            onClick={clickAllCheck}
            {...register("allCheck", {
              required: false,
            })}
          />
          <label htmlFor="allCheck" className={styles.checkInput__allCheck}>
            약관 전체 동의
          </label>
        </div>

        <div className={styles.row_bar}></div>

        <div className={styles.checkInput}>
          <input
            type="checkbox"
            id="age"
            {...register("age", {
              required: true,
            })}
          />
          <label htmlFor="age">(필수) 만 14세 이상입니다.</label>
        </div>

        <div className={styles.checkInput}>
          <input
            type="checkbox"
            id="service"
            {...register("service", {
              required: true,
            })}
          />
          <Link to={"/signup/agreeService"}>
            <label htmlFor="service">(필수) 서비스 이용약관 동의</label>
          </Link>
        </div>

        <div className={styles.checkInput}>
          <input
            type="checkbox"
            id="privacy"
            {...register("privacy", {
              required: true,
            })}
          />
          <Link to={"/signup/agreePrivacy"}>
            <label htmlFor="privacy">(필수) 개인정보 수집 및 이용 동의</label>
          </Link>
        </div>

        <div className={styles.checkInput}>
          <input
            type="checkbox"
            id="allCheck"
            {...register("marketing", {
              required: false,
            })}
          />
          <label htmlFor="allCheck">(선택) 마케팅 정보 수신 동의</label>
        </div>

        <SignupButton
          content="동의하기"
          type="submit"
          disabled={!watchRequired.every((input) => input === true)}
        />
      </form>
    </section>
  );
}

export default Agree;
