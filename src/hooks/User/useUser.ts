import {useQuery, UseQueryResult} from '@tanstack/react-query';

import {memberRequest} from '@/api/user';

import {User} from '@/types/sidebar';

function useGetMyInfo(isOpen: boolean): UseQueryResult<User, Error> {
  return useQuery({
    queryKey: ['myInfo'],
    queryFn: memberRequest.getMyInfo,
    enabled: isOpen,
  });
}

export {useGetMyInfo};
