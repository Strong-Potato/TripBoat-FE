import axios from 'axios';

import {AuthForm} from '@/types/auth';

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

/* ------------------------------- WITHDRAWAL ------------------------------- */
export const withdrawal = ({password}: AuthForm) =>
  axios.post(
    '/api/members/sign-out',
    {
      password,
    },
    {withCredentials: true},
  );
