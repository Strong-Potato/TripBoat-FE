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

export const GetAlarmState = async () => {
  try {
    const response = await axios.get(`/api/members/notification`, {withCredentials: true}); // 엔드포인트 확인
    return response; // 반환 값 확인 ( boolean이어야 함.)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      return error.response;
    }
  }
};

export const PostSubscribe = async () => {
  try {
    const response = await axios.post(`/api/notifications/subscribe`, {withCredentials: true});
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      return error.response;
    }
  }
};

export const PostUnsubscribe = async () => {
  try {
    const response = await axios.post(`/api/notifications/unsubscribe`, {withCredentials: true});
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      return error.response;
    }
  }
};
