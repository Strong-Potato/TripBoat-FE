import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./EditProfileForm.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";
import InputImage from "@/components/Auth/Input/InputImage";
import InputNickname from "@/components/Auth/Input/InputNickname";

import { AuthForm } from "@/types/auth";

function EditProfileForm() {
  const {
    register,
    resetField,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<AuthForm>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    // 프로필 변경 api 요청
    navigate("/user", { replace: true });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <InputImage register={register} />

      <InputNickname
        register={register}
        dirty={dirtyFields.nickname}
        error={errors.nickname}
        resetField={resetField}
      />

      <AuthButton content="편집 완료" disabled={false} type="submit" />
    </form>
  );
}

export default EditProfileForm;
