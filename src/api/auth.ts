import axios from 'axios';

export const authRequest = {
  login: (email: string, password: string) =>
    axios.post(
      '/api/login', 
      {
        email,
        password,
      },
      {withCredentials: true},
    ),

  login_kakao: () =>
    axios.post('/api/oauth2/authorization/kakao', null, {
      withCredentials: true,
    }),

<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
  withdrawal: (password?: string) =>
    axios.post(
      '/api/members/sign-out',
      {
        password,
      },
      {withCredentials: true},
    ),
};
