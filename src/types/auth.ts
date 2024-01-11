import {
  FieldError,
  UseFormRegister,
  UseFormResetField,
} from "react-hook-form";

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
interface SignupForm {
  email: string;
  emailSert: string;
  password: string;
  passwordConfirm: string;
  image: FileList;
  nickname: string;
}

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

interface StepEmailProps {
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
  dirty?: boolean;
  error?: FieldError;
  register: UseFormRegister<SignupForm>;
  resetField: UseFormResetField<SignupForm>;
}

interface StepEmailSertProps {
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegister<SignupForm>;
  dirty?: boolean;
  error?: FieldError;
  email: string;
}

interface StepPasswordProps {
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegister<SignupForm>;
  resetField: UseFormResetField<SignupForm>;
  dirtyFields?: boolean;
  errors?: FieldError;
  email: string;
}

export type {
  AgreeForm,
  AgreeName,
  AgreeProps,
  LoginDirtyFields,
  LoginForm,
  LoginInput,
  SignupForm,
  StepEmailProps,
  StepEmailSertProps,
};
