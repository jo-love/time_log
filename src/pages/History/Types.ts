export interface IResultData {
  name: string;
  img: string;
  timer: number;
  date?: string;
  startAt: string;
  endAt: string;
  identifier: string;
}

export interface IProcessingData {
  date: string;
  infoByDate: IResultData[];
}

export interface ResultCardProps {
  record: IProcessingData;
}

