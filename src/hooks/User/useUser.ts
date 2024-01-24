import {useQuery, UseQueryResult} from '@tanstack/react-query';
import axios from 'axios';

import {UserInfo} from '@/types/user';

const memberRequest = {
  getMyInfo: () => axios.get('/api/members/my-info').then((response) => response.data.data),
};
function useGetMyInfo(isOpen: boolean): UseQueryResult<UserInfo, Error> {
  return useQuery({
    queryKey: ['myInfo'],
    queryFn: memberRequest.getMyInfo,
    enabled: isOpen,
    retry: 0,
  });
}

export {useGetMyInfo};
