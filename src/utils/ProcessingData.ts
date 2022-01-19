import {
  IResultData,
  IProcessingData,
  IDataForTotal,
} from 'pages/History/Types';

export const processData = (rawData: IResultData[]) => {
  let processingData: IProcessingData[] = [];
  const uniqueDate: string[] = [];

  // 날짜 가져오기
  const getDate = rawData.map((el) => el.date);
  // 유니크 날짜와 infodata 객체 만들어 주기
  const combination = Array.from(new Set(getDate)).map((date) => {
    uniqueDate.push(date || '');
    return { date: date, infoByDate: [] };
  });
  // 객체 틀 배열에 넣어주기
  processingData = [...combination] as IProcessingData[];

  rawData.map((item) => {
    const targetIdx = uniqueDate.indexOf(item.date || '');
    delete item['date'];
    return processingData[targetIdx].infoByDate.push(item);
  });
  return processingData;
};

export const processAnotherData = (rawData: IProcessingData) => {
  let processingData: IDataForTotal[] = [];
  const uniqueArr: string[] = [];

  const getImg = rawData.infoByDate.map((el) => el.img);
  const combination = Array.from(new Set(getImg)).map((img) => {
    uniqueArr.push(img);
    return { img: img, timer: [] };
  });
  processingData = [...combination];

  rawData.infoByDate.map((el) => {
    const idx = uniqueArr.indexOf(el.img);
    return processingData[idx].timer.push(el.timer);
  });
  return processingData;
};
