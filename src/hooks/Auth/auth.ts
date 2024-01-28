import {useMutation} from '@tanstack/react-query';

import {login, logout} from '@/api/auth';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.data.responseCode === 401) {
        console.error('이메일 비밀번호 불일치', data);
        return;
      }
      console.log('로그인 성공', data);
    },
    onError: (err) => console.error('로그인 실패', err),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
