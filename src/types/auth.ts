import {FieldError, FieldErrors, UseFormRegister, UseFormResetField} from 'react-hook-form';

/* --------------------------------- common --------------------------------- */
export interface HeaderProps {
  content?: string;
}

export interface AuthButtonProps {
  content: string;
  type: 'button' | 'reset' | 'submit' | undefined;
  disabled: boolean;
  onClick?: () => void;
}

export interface AuthForm {
  email?: string;
  emailSert?: string;
  password?: string;
  passwordConfirm?: string;
  oldPassword?: string;
  image?: FileList | undefined;
  nickname?: string;
}

export interface InputEmailProps {
  register: UseFormRegister<AuthForm>;
  dirty?: boolean;
  error?: FieldError;
  resetField: UseFormResetField<AuthForm>;
}

export interface InputEmailSertProps {
  register: UseFormRegister<AuthForm>;
  email?: string;
  due: number;
  setDue: React.Dispatch<React.SetStateAction<number>>;
  type: string;
}

export interface InputPasswordProps {
  register: UseFormRegister<AuthForm>;
  dirtyFields?: DirtyFields;
  errors?: FieldErrors<AuthForm>;
  resetField: UseFormResetField<AuthForm>;
}

export interface InputPasswordConfirmProps {
  register: UseFormRegister<AuthForm>;
  password?: string;
  passwordConfirm?: string;
  dirtyFields?: DirtyFields;
  errors?: FieldErrors<AuthForm>;
  resetField: UseFormResetField<AuthForm>;
}

export interface InputImageProps {
  register: UseFormRegister<AuthForm>;
  imageUrl?: string;
  setImageUrl?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface InputNickname {
  register: UseFormRegister<AuthForm>;
  dirty?: boolean;
  error?: FieldError;
  resetField: UseFormResetField<AuthForm>;
}

export interface InputOldPasswordProps {
  register: UseFormRegister<AuthForm>;
  dirtyFields?: DirtyFields;
  errors?: FieldErrors<AuthForm>;
}

/* ---------------------------------- Login --------------------------------- */

export interface LoginDirtyFields {
  email?: boolean;
  password?: boolean;
}

export interface LoginInput {
  label: string;
  dirtyFields: LoginDirtyFields;
  register: UseFormRegister<AuthForm>;
  resetField: UseFormResetField<AuthForm>;
}

/* --------------------------------- Signup --------------------------------- */

export interface AgreeForm {
  allCheck: boolean;
  age: boolean;
  service: boolean;
  privacy: boolean;
  marketing: boolean;
}

export interface AgreeProps {
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
}

export type AgreeName = 'age' | 'service' | 'privacy' | 'marketing' | 'allCheck';

export interface DirtyFields {
  email?: boolean;
  emailSert?: boolean;
  password?: boolean;
  passwordConfirm?: boolean;
  oldPassword?: boolean;
  image?: boolean;
  nickname?: boolean;
}

export interface SignupFormProps {
  signupStep: string;
  setSignupStep: React.Dispatch<React.SetStateAction<string>>;
}

export interface StepEmailProps {
  setSignupStep?: React.Dispatch<React.SetStateAction<string>>;
  setFindPasswordStep?: React.Dispatch<React.SetStateAction<string>>;
  dirty?: boolean;
  error?: FieldError;
  watchFields: Partial<AuthForm>;
  register: UseFormRegister<AuthForm>;
  resetField: UseFormResetField<AuthForm>;
}

export interface StepEmailSertProps {
  setSignupStep?: React.Dispatch<React.SetStateAction<string>>;
  setFindPasswordStep?: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegister<AuthForm>;
  watchFields: Partial<AuthForm>;
  dirty?: boolean;
  error?: FieldError;
  setCode?: React.Dispatch<React.SetStateAction<string>>;
}

export interface StepPasswordProps {
  setSignupStep?: React.Dispatch<React.SetStateAction<string>>;
  setStep?: React.Dispatch<React.SetStateAction<string>>;
  setToken?: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegister<AuthForm>;
  resetField: UseFormResetField<AuthForm>;
  watchFields: Partial<AuthForm>;
  dirtyFields?: DirtyFields;
  errors?: FieldErrors<AuthForm>;
}

export interface StepOldPasswordProps {
  register: UseFormRegister<AuthForm>;
  dirtyFields?: DirtyFields;
  errors?: FieldErrors<AuthForm>;
  watchFields: Partial<AuthForm>;
  setStep?: React.Dispatch<React.SetStateAction<string>>;
  setToken?: React.Dispatch<React.SetStateAction<string>>;
}

export interface StepProfileProps {
  register: UseFormRegister<AuthForm>;
  resetField: UseFormResetField<AuthForm>;
  dirty?: boolean;
  error?: FieldError;
}

export interface ExpireAlertProps {
  expire: number;
  onClickAction: () => void;
}
