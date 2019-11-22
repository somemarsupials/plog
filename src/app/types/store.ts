export type WriteLog = (date: Date, content: string) => Promise<void>;
export type ReadLog = (date: Date) => Promise<string>;

export interface Store {
  read: ReadLog;
  write: WriteLog;
}
