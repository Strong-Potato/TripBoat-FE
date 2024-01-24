import {jwtDecode} from 'jwt-decode';

import {InviteCode} from '@/types/Invitation';

export function parseInviteCode(inviteCode: string): InviteCode | null {
  try {
    const decoded = jwtDecode<InviteCode>(inviteCode);
    return decoded;
  } catch (error) {
    console.error('JWT 디코딩 중 에러 발생:', error);
    return null;
  }
}
