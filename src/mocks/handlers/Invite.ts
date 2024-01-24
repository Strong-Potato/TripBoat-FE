import {http, HttpResponse} from 'msw';

const inviteCode = {
  status: 200,
  message: 'SUCCESS',
  data: {
    code: 'NkpWoMi2',
  },
};

export const invite = [
  http.post('/api/auth/join/spaces/:spaceId/code', async ({request, cookies}) => {
    const url = String(new URL(request.url));
    const spaceId = url.split('/')[7];
    console.log(cookies);

    if (cookies && spaceId) {
      return HttpResponse.json(inviteCode, {status: 200});
    } else {
      return HttpResponse.json({message: 'nickname과 spaceId가 필요합니다.'}, {status: 400});
    }
  }),

  http.post('/api/auth/join/spaces/:spaceId', async ({cookies}) => {
    if (cookies.join_space_token) {
      return HttpResponse.json({message: 'SUCCESS'}, {status: 200});
    } else {
      return HttpResponse.json({message: '필요한 쿠키가 없습니다.'}, {status: 400});
    }
  }),
];
