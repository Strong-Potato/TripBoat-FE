import axios from 'axios';

import {AuthForm} from '@/types/auth';

export const authRequest = {
  /* ---------------------------------- LOG IN/OUT --------------------------------- */
  login: async (email: string, password: string) => {
    try {
      const res = await axios.post(
        '/api/login',
        {
          email,
          password,
        },
        {withCredentials: true},
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  logout: () => axios.post('/api/logout', {}, {withCredentials: true}),

  /* --------------------------------- SIGNUP FLOW --------------------------------- */
  signup_sendEmail: (email?: string) =>
    axios.post('/api/auth/register/send-email', {
      email,
    }),

  signup_emailSert: (email?: string, code?: string) =>
    axios.post('/api/auth/register/check-token', {
      email,
      code,
    }),

  signup_submit: (email?: string, password?: string, profile?: string, nickname?: string, token?: string) =>
    axios.post('/api/auth/register', {
      email,
      password,
      profile,
      nickname,
      token,
    }),

  /* ------------------------------ FIND PASSWORD ----------------------------- */
  lostPassword_sendEmail: (email?: string) =>
    axios.post('/api/auth/modify/lost-password/send-email', {
      email,
    }),

  lostPassword_emailSert: (email?: string, code?: string) =>
    axios.post('/api/auth/modify/lost-password/check-token', {
      email,
      code,
    }),

  lostPassword_submit: (email?: string, newPassword?: string, token?: string) =>
    axios.post('/api/auth/modify/lost-password', {
      email,
      newPassword,
      token,
    }),

  /* ----------------------------- MODIFY PASSWORD ---------------------------- */
  modifyPassword_check: (password?: string) =>
    axios.post('/api/auth/modify/password/check', {
      password,
    }),

  modifyPassword_submit: (token?: string, newPassword?: string) =>
    axios.post('/api/auth/modify/password', {
      token,
      newPassword,
    }),

  /* ------------------------------- WITHDRAWAL ------------------------------- */
  withdrawal: (password?: string) =>
    axios.post(
      '/api/members/sign-out',
      {
        password,
      },
      {withCredentials: true},
    ),
};

/* ---------------------------------- LOG IN/OUT --------------------------------- */
export const login = ({email, password}: AuthForm) =>
  axios.post(
    '/api/login',
    {
      email,
      password,
    },
    {withCredentials: true},
  );

export const logout = () => axios.post('/api/logout', {}, {withCredentials: true});

/* --------------------------------- SIGNUP FLOW --------------------------------- */
export const signup_sendEmail = ({email}: AuthForm) =>
  axios.post('/api/auth/register/send-email', {
    email,
  });

export const signup_emailSert = ({email, code}: AuthForm) =>
  axios.post('/api/auth/register/check-token', {
    email,
    code,
  });

export const signup_submit = ({email, password, profile, nickname, token}: AuthForm) =>
  axios.post('/api/auth/register', {
    email,
    password,
    profile,
    nickname,
    token,
  });

/* ------------------------------ FIND PASSWORD ----------------------------- */
export const lostPassword_sendEmail = ({email}: AuthForm) =>
  axios.post('/api/auth/modify/lost-password/send-email', {
    email,
  });

export const lostPassword_emailSert = ({email, code}: AuthForm) =>
  axios.post('/api/auth/modify/lost-password/check-token', {
    email,
    code,
  });

export const lostPassword_submit = ({email, newPassword, token}: AuthForm) =>
  axios.post('/api/auth/modify/lost-password', {
    email,
    newPassword,
    token,
  });

/* ----------------------------- MODIFY PASSWORD ---------------------------- */
export const modifyPassword_check = ({password}: AuthForm) =>
  axios.post('/api/auth/modify/password/check', {
    password,
  });

export const modifyPassword_submit = ({token, newPassword}: AuthForm) =>
  axios.post('/api/auth/modify/password', {
    token,
    newPassword,
  });
