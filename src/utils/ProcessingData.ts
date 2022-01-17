import { IResultData, IProcessingData } from "pages/History/Types";

export const processData = (originData: IResultData[]) => {
    let processingData: IProcessingData[] = [];
    let uniqueDate: string[] = [];

    // 날짜 정보 가져오기
    const getDateValue = originData.map((el) => {
      return el.date;
    });

    // 유니크 날짜와 infodata 객체 만들어 주기
    const combination = Array.from(new Set(getDateValue)).map((date) => {
      uniqueDate.push(date || '');
      return { date: date, infoByDate: [] };
    });

    // 객체 틀 배열에 넣어주기
    processingData = [...combination] as IProcessingData[];
    // dateData에서 processingData index 확인하여 넣기
    originData.map((item) => {
      const targetIdx = uniqueDate.indexOf(item.date || '');
      delete item['date'];
      return processingData[targetIdx].infoByDate.push(item);
    });
    return processingData;
  };