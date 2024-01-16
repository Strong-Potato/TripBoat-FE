import {
  FieldError,
  FieldErrors,
  UseFormRegister,
  UseFormResetField,
} from "react-hook-form";

/* --------------------------------- common --------------------------------- */
interface HeaderProps {
  content?: string;
}

interface AuthButtonProps {
  content: string;
  type: "button" | "reset" | "submit" | undefined;
  disabled: boolean;
  onClick?: () => void;
}

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

interface SignupForm {
  email: string;
  emailSert: string;
  password: string;
  passwordConfirm: string;
  image?: FileList | undefined;
  nickname: string;
}

interface DirtyFields {
  email?: boolean;
  emailSert?: boolean;
  password?: boolean;
  passwordConfirm?: boolean;
  image?: boolean;
  nickname?: boolean;
}

interface SignupFormProps {
  signupStep: string;
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
}

interface StepEmailProps {
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
  dirty?: boolean;
  error?: FieldError;
  watchFields: Partial<SignupForm>;
  register: UseFormRegister<SignupForm>;
  resetField: UseFormResetField<SignupForm>;
  showToast: (message: string) => void;
  toast: string | null;
}

interface StepEmailSertProps {
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegister<SignupForm>;
  watchFields: Partial<SignupForm>;
  dirty?: boolean;
  error?: FieldError;
  showToast: (message: string) => void;
  toast: string | null;
}

interface StepPasswordProps {
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegister<SignupForm>;
  resetField: UseFormResetField<SignupForm>;
  watchFields: Partial<SignupForm>;
  dirtyFields?: DirtyFields;
  errors?: FieldErrors<SignupForm>;
  showToast: (message: string) => void;
  toast: string | null;
}

interface StepProfileProps {
  register: UseFormRegister<SignupForm>;
  resetField: UseFormResetField<SignupForm>;
  dirty?: boolean;
  error?: FieldError;
}

export type {
  AgreeForm,
  AgreeName,
  AgreeProps,
  AuthButtonProps,
  HeaderProps,
  LoginForm,
  LoginInput,
  SignupForm,
  SignupFormProps,
  StepEmailProps,
  StepEmailSertProps,
  StepPasswordProps,
  StepProfileProps,
};
