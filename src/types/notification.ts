export interface Token {
  token: string;
}

// interface MemberEventInfo {
//   memberId: number;
//   memberNickname: string;
//   memberImageUrl: string;
// }

// interface SpaceEventInfo {
//   spaceId: number;
//   spaceTitle: string;
//   oldTitle: string | null;
//   oldDates: string | null;
//   changeDate: string | null;
// }

// interface VoteEventInfo {
//   voteId?: number;
//   voteTitle?: string;
// }

// interface NotificationInformation {
//   topicId: number;
//   memberEventInfo: MemberEventInfo;
//   spaceEventInfo: SpaceEventInfo;
//   voteEventInfo?: VoteEventInfo;
//   eventType: NotificationEventType;
//   createdAt: string;
// }
type NotificationEventType =
  | 'VOTE_CREATED'
  | 'VOTE_DONE'
  | 'VOTE_DELETED'
  | 'MEMBER_INVITED'
  | 'MEMBER_EXIT'
  | 'NEW_JOURNEY_ADDED'
  | 'CANDIDATE_ADDED'
  | 'SPACE_LOCATION_CHANGED'
  | 'SPACE_SCHEDULE_CHANGED';

export interface NotificationDetails {
  isRead: boolean;
  id: number;
  type: NotificationEventType;
  notificationInformation: string;
  receiverId: number;
  createdAt: string;
}

export interface NotificationData {
  url: string;
  title: string;
  time: string;
}
