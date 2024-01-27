import axios from 'axios';

export const authRequest = {
  /* ---------------------------------- LOG IN/OUT --------------------------------- */
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
