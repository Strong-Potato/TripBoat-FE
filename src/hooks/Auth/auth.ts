import {useMutation} from '@tanstack/react-query';

import {
  login,
  logout,
  lostPassword_emailSert,
  lostPassword_sendEmail,
  lostPassword_submit,
  modifyPassword_check,
  modifyPassword_submit,
  signup_emailSert,
  signup_sendEmail,
  signup_submit,
} from '@/api/auth';

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
      console.log('이메일 인증 성공', data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

/* ------------------------------ FIND PASSWORD ----------------------------- */
export const useFindPassword = () => {
  return useMutation({
    mutationFn: lostPassword_submit,
    onSuccess: (data) => {
      const resCode = data.data.responseCode;

      if (resCode === 204 || resCode === 205) {
        console.error('토큰 에러', data);
        return;
      }
      if (resCode === 207) {
        console.error('기존 비밀번호 입력', data);
        return;
      }
      console.log('비밀번호 변경 성공', data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useFindPasswordSendEmail = () => {
  return useMutation({
    mutationFn: lostPassword_sendEmail,
    onSuccess: (data) => {
      const resCode = data.data.responseCode;

      if (resCode === 404) {
        console.error('존재하지 않는 유저', data);
        return;
      }
      if (resCode === 202) {
        console.error('요청 횟수 초과', data);
        return;
      }
      console.log('이메일 요청 성공', data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useFindPasswordEmailSert = () => {
  return useMutation({
    mutationFn: lostPassword_emailSert,
    onSuccess: (data) => {
      const resCode = data.data.responseCode;

      if (resCode === 203) {
        console.error('인증코드 불일치', data);
        return;
      }
      console.log('이메일 인증 성공', data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

/* ----------------------------- MODIFY PASSWORD ---------------------------- */
export const useModifyPassword = () => {
  return useMutation({
    mutationFn: modifyPassword_submit,
    onSuccess: (data) => {
      const resCode = data.data.responseCode;

      if (resCode === 207) {
        console.error('기존 비밀번호 입력', data);
        return;
      }
      console.log('비밀번호 변경 성공', data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useModifyPasswordCheck = () => {
  return useMutation({
    mutationFn: modifyPassword_check,
    onSuccess: (data) => {
      const resCode = data.data.responseCode;

      if (resCode === 206) {
        console.error('인증코드 불일치', data);
        return;
      }
      console.log('이메일 인증 성공', data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
};
