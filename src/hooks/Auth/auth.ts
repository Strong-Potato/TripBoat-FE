import {useMutation} from '@tanstack/react-query';

import {login, logout, signup_emailSert, signup_sendEmail, signup_submit} from '@/api/auth';

/* ---------------------------------- LOG IN/OUT --------------------------------- */
export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const resCode = data.data.responseCode;

      if (resCode === 401) {
        console.error('이메일 비밀번호 불일치', data);
        return;
      }
      console.log('로그인 성공', data);
    },
    onError: (err) => console.error(err),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

/* --------------------------------- SIGNUP FLOW --------------------------------- */
export const useSignup = () => {
  return useMutation({
    mutationFn: signup_submit,
    onSuccess: (data) => {
      const resCode = data.data.responseCode;

      if (resCode === 204 || resCode === 205) {
        console.error('토큰 에러', data);
        return;
      }
      console.log('회원가입 성공', data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useSignupSendEmail = () => {
  return useMutation({
    mutationFn: signup_sendEmail,
    onSuccess: (data) => {
      const resCode = data.data.responseCode;

      if (resCode === 202) {
        console.error('요청 횟수 초과', data);
        return;
      }
      if (resCode === 101) {
        console.error('이미 가입된 이메일', data);
        return;
      }
      console.log('이메일 요청 성공', data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useSignupEmailSert = () => {
  return useMutation({
    mutationFn: signup_emailSert,
    onSuccess: (data) => {
      const resCode = data.data.responseCode;

      if (resCode === 203) {
        console.error('인증코드 불일치', data);
        return;
      }
      console.log(data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};
