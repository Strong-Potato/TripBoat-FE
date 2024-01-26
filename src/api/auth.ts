import axios from 'axios';

export const authRequest = {
  withdrawal: async (password?: string) =>
    await axios.post(
      '/api/members/sign-out',
      {
        password,
      },
      {withCredentials: true},
    ),
};
