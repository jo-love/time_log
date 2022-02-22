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
  gap: 25px 0;
  width: 80%;
  margin: 0 auto;
  padding: 90px 0px;

  @media ${(props) => props.theme.size.laptop} {
    width: 95%;
  }
  @media ${(props) => props.theme.size.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const History = () => {
  const userEmail = useRecoilValue(userEmailState);
  const [processingData, setProcessingData] = useState<IProcessingData[]>([]);

  const getMyHistory = useCallback(async () => {
    const firestoreData = await db
      .collection('logInfo')
      .where('identifier', '==', userEmail)
      .orderBy('date', 'asc')
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
