// import {useMutation} from '@tanstack/react-query';

// import {postJoin} from '@/api/invite';

// const handleMutationError = (error: Error) => {
//   console.error('[inviteCode]에러가 발생했습니다', error);
// };

// export const useInviteCodeJoin = () => {
//   return useMutation({
//     mutationFn: postJoin,
//     onError: handleMutationError,
//   });
// };

// export const useInviteCodeRequest = ({nickname, spaceId}: InviteCodeRequestParams) => {
//   return useMutation({
//     mutationFn: () => postJoinSpaces({nickname, spaceId}),
//     onError: handleMutationError,
//   });
// };
