export type EventType = 'TEST_MATCH' | 'ONE_DAY' | 'T20' | 'SUPER_OVER' | 'BOWL_OUT';

export type EventStatus = 'UPCOMING' | 'LIVE' | 'LOCKED' | 'COMPLETED';

export interface Event {
  id: string;
  title: string;
  type: EventType;
  status: EventStatus;
  startTime: string;
  lockTime: string;
  entryCoins: number;
  joined: boolean;
  description?: string;
  rules?: string[];
}
