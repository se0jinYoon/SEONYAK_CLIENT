import styled from '@emotion/styled';
import BottomSheet from '@pages/onboarding/components/BottomSheet';
import { excludeCommonPart } from '@pages/onboarding/utils/excludeCommonPart';
import { useState } from 'react';
import SearchBox from '../SearchBox';

const Step학교선택 = () => {
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const [selectedUniv, setSelectedUniv] = useState('');
  const handleOpenSheet = () => setIsOpenSheet(true);
  const handleCloseSheet = () => setIsOpenSheet(false);
  const handleSelectUniv = (selectValue: string) => {
    setSelectedUniv(selectValue);
  };
  return (
    <>
      <SearchBox placeholder="학교명을 입력해 주세요" handleInputClick={handleOpenSheet} />;
      {isOpenSheet && (
        <BottomSheet handeClose={handleCloseSheet}>
          <Sheet학교선택 handleSelectUniv={handleSelectUniv} />
        </BottomSheet>
      )}
    </>
  );
};

export default Step학교선택;

interface Sheet학교선택PropType {
  // eslint-disable-next-line no-unused-vars
  handleSelectUniv: (selectValue: string) => void;
}

const Sheet학교선택 = ({ handleSelectUniv }: Sheet학교선택PropType) => {
  const dummy = ['서울여자대학교', '서울여자대학교 특수치료전문대학원', '서울여성대학교'];
  const search = '서울여';
  return (
    <SheetWrapper>
      <SearchBox placeholder="학교명을 입력해 주세요" />
      <Content>
        {dummy.map((d) => (
          <ListWrapper key={d} onClick={() => handleSelectUniv(d)}>
            <ListBold key={d + 'idx'}>{search}</ListBold>
            <List key={d}>{excludeCommonPart({ common: search, str: d })}</List>
          </ListWrapper>
        ))}
      </Content>
    </SheetWrapper>
  );
};

const SheetWrapper = styled.div`
  width: 100%;
  margin: 2.3rem 2rem 0;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 1.5rem 0 0 1rem;
`;

const ListWrapper = styled.section`
  display: flex;
`;

const ListBold = styled.span`
  ${({ theme }) => theme.fonts.Body3_SB_14};
`;

const List = styled.span`
  ${({ theme }) => theme.fonts.Body2_R_14};
`;
