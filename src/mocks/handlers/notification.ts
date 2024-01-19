import {http, HttpResponse} from 'msw';

import {Token} from '@/types/notification';

export const Notification = [
  http.post('/api/notification/token', async ({request}) => {
    const {token} = (await request.json()) as Token;
    if (token) {
      return HttpResponse.json({message: 'SUCCESS'}, {status: 200});
    }
  }),
];
