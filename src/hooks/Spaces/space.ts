import {useSuspenseQuery} from '@tanstack/react-query';

import {getRegions} from '@/api/spaces';

// [GET] 지역 리스트
export const useGetRegions = () => {
  return useSuspenseQuery({
    queryKey: ['spaces', 'city'],
    queryFn: () => getRegions(),
  });
};
