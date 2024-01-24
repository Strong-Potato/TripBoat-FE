import {useQuery, UseQueryResult} from '@tanstack/react-query';

import {memberRequest} from '@/api/user';

import {GetUserProp} from '@/types/sidebar';

function useGetMyInfo(isOpen: boolean): UseQueryResult<GetUserProp, Error> {
  return useQuery({
    queryKey: ['myInfo'],
    queryFn: memberRequest.getMyInfo,
    enabled: isOpen,
    retry: 0,
  });
}

export {useGetMyInfo};
