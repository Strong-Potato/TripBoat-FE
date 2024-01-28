import {jwtDecode} from 'jwt-decode';

import {InviteCode} from '@/types/Invitation';

export function parseInviteCode(inviteCode: string): InviteCode | null {
  try {
    const decoded = jwtDecode<InviteCode>(inviteCode);
    return decoded;
  } catch (error) {
    console.log('[친구초대]잘못된 토큰 형식입니다.', error);
    return null;
  }
}
