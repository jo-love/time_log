import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { db } from 'api/Firebase';
import { IProcessingData, IResultData } from './Types';
import ResultCard from './ResultCard';
import { userEmailState } from 'recoil/atoms';
import { processData } from 'utils/ProcessingData';

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 0;
  padding: 80px 60px;
`;

const History = () => {
  const userEmail = useRecoilValue(userEmailState);
  const [processingData, setProcessingData] = useState<IProcessingData[]>([]);

  const getMyHistory = useCallback(async () => {
    const firestoreData = await db
      .collection('logInfo')
      .where('identifier', '==', userEmail)
      .get();
    const originData = firestoreData.docs.map(
      (doc) => doc.data() as IResultData,
    );

    setProcessingData(processData(originData));
  }, [userEmail]);

  useEffect(() => {
    getMyHistory();
  }, [getMyHistory]);
  return (
    <Main>
      {processingData.map((record, i) => (
        <ResultCard record={record} key={i} />
      ))}
    </Main>
  );
};

export default History;
