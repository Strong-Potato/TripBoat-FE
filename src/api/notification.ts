import axios from 'axios';

import {Token} from '@/types/notification';

export const sendNotificationToken = async (token: Token) => {
  try {
    const response = await axios.post('/api/notifications/token', token, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.error('[notification]토큰 전송 요청에 실패했습니다', error);
  }
};

export const GetNotification = async () => {
  try {
    const response = await axios.get('/api/notifications');
    return response.data.data;
  } catch (error) {
    console.log('[notification]알림내용을 가져오지 못했습니다');
  }
};

export const GetAlarm = async () => {
  try {
    const response = await axios.get('/api/notifications', {withCredentials: true});
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      return error.response;
    }
  }
};

export const PostReadAlarm = async (notiId: number) => {
  try {
    const response = await axios.patch(`/api/notifications/${notiId}/read`, {withCredentials: true});
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      return error.response;
    }
  }
};
