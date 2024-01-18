import { InviteCode } from "@/types/Invitation";

export function parseInviteCode(inviteCode: string): InviteCode {
  const keyValuePairs = inviteCode.split(":");
  return keyValuePairs.reduce((acc, pair) => {
    const [key, value] = pair.split("=");
    acc[key as keyof InviteCode] = value;
    return acc;
  }, {} as InviteCode);
}
