interface Content {
  url: string;
  title: string;
  time: string;
}

export interface ContentProps {
  contents: Content[];
}

export type AlarmProps = {
  alarmClose: () => void;
  isAlarmOpen: boolean;
};

export type BackProps = {
  alarmClose: () => void;
};
