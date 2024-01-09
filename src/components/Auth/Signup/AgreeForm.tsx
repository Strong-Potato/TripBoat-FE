import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import styles from "./AgreeForm.module.scss";

import SignupButton from "./Button/SignupButton";

import { AgreeForm, AgreeName, AgreeProps } from "@/types/auth";

function Agree({ setSignupStep }: AgreeProps) {
  const { register, setValue, watch } = useForm<AgreeForm>({
    mode: "onChange",
  });

  // watch formState
  const watchAllCheck = watch("allCheck", false);
  const watchAge = watch("age", false);
  const watchService = watch("service", false);
  const watchPrivacy = watch("privacy", false);
  const watchMarketing = watch("marketing", false);
  const watchRequired = watch(["age", "service", "privacy"]);

  const inputs: AgreeName[] = ["age", "service", "privacy", "marketing"];

  useEffect(() => {
    if (inputs.every((input) => watch(input) === true)) {
      setValue("allCheck", true);
    } else {
      setValue("allCheck", false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchAge, watchService, watchPrivacy, watchMarketing]);

  const clickAllCheck = () => {
    if (watchAllCheck) {
      inputs.forEach((input) => {
        setValue(input, false);
      });
      return;
    }

    inputs.forEach((input) => {
      setValue(input, true);
    });
  };

  const clickAgree = () => {
    setSignupStep("email");
  };

  return (
    <section className={styles.container}>
      <h1>서비스 이용 동의</h1>

      <form>
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
          onClick={clickAgree}
          content="동의하기"
          disabled={!watchRequired.every((input) => input === true)}
        />
      </form>
    </section>
  );
}

export default Agree;
