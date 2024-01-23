import {http, HttpResponse} from 'msw';

import {Token} from '@/types/notification';

const alarmData = {
  status: 200,
  message: 'SUCCESS',
  data: {
    elements: [
      {
        id: 3,
        notificationType: 'NEW_CANDIDATE_ADDED',
        memberProfile: {
          id: 1,
          nickname: '강자밭',
          profileImageUrl: 'http://image.com/test',
        },
        voteInfo: {
          id: 1,
          title: '카페 어디갈래',
        },
        createdAt: '2024-01-01 14:00:00', // 발급일자(yyyy-MM-dd HH:mm:ss)
      },
      {
        id: 2,
        notificationType: 'MEMBER_EXIT_ENTER',
        memberProfile: {
          id: 1,
          nickname: '강자밭',
          profileImageUrl: 'http://image.com/test',
        },
        spaceInfo: {
          id: 1,
          title: '강릉 여행',
        },
        createdAt: '2024-01-01 14:00:00 ',
      },
      {
        id: 1,
        notificationType: 'NOTICE',
        createdAt: '2024-01-01 14:00:00',
      },
    ],
  },
};

export const notification = [
  http.post('/api/notifications/token', async ({request}) => {
    const {token} = (await request.json()) as Token;
    if (token) {
      return HttpResponse.json({message: 'SUCCESS'}, {status: 200});
    }
  }),

  http.get('/api/notifications', () => {
    return HttpResponse.json(alarmData, {status: 200});
  }),
];
