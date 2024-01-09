import { UseFormRegister, UseFormResetField } from "react-hook-form";

/* ---------------------------------- Login --------------------------------- */
interface LoginForm {
  email: string;
  password: string;
}

interface LoginDirtyFields {
  email?: boolean;
  password?: boolean;
}

interface LoginInput {
  label: string;
  dirtyFields: LoginDirtyFields;
  register: UseFormRegister<LoginForm>;
  resetField: UseFormResetField<LoginForm>;
}

/* --------------------------------- Signup --------------------------------- */

interface AgreeForm {
  allCheck: boolean;
  age: boolean;
  service: boolean;
  privacy: boolean;
  marketing: boolean;
}

interface AgreeProps {
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
}

type AgreeName = "age" | "service" | "privacy" | "marketing" | "allCheck";

export type {
  AgreeForm,
  AgreeName,
  AgreeProps,
  LoginDirtyFields,
  LoginForm,
  LoginInput,
};
