import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

import {GetAlarm, PostSubscribe, PostUnsubscribe} from '@/api/notification';

function useGetAlarm(enabled: boolean) {
  return useQuery({
    queryKey: ['AlarmData'],
    queryFn: GetAlarm,
    enabled,
    retry: 0,
  });
}

function usePostSubscribe() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: PostSubscribe,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['myinfo']});
    },
  });
}

function usePostUnsubscribe() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: PostUnsubscribe,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['myinfo']});
    },
  });
}

export {useGetAlarm, usePostSubscribe, usePostUnsubscribe};
