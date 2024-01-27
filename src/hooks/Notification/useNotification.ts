import {useQuery} from '@tanstack/react-query';

import {GetAlarm} from '@/api/notification';

function useGetAlarm(enabled: boolean) {
  return useQuery({
    queryKey: ['AlarmData'],
    queryFn: GetAlarm,
    enabled,
    retry: 0,
  });
}

export {useGetAlarm};
