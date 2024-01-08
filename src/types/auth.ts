import { UseFormRegister, UseFormResetField } from "react-hook-form";

interface SubmitResult {
  try: boolean;
  isPassed: boolean;
}

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

export type { LoginDirtyFields, LoginForm, LoginInput, SubmitResult };
