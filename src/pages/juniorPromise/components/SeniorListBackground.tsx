import { ResetIc, Line292Ic, CloseIc } from '@assets/svgs';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { FilterButton } from './FilterButton';
import { FIELD_LIST } from '../constants/fieldList';
import { POSITION_LIST } from '../constants/positionList';
// import { POSITION_LIST } from '../constants/positionList';

interface SeniorListBackgroundProps {
  children: ReactNode;
  handleFilterActiveBtn: (btnText: string) => void;
  handleReset: () => void;
  positionChipNum: number;
  chipFieldName: string[];
  deleteFieldList: (chipName: string) => void;
  handleChipField: (fieldId: number) => void;
  chipPositionName: string[];
  deletePositionList: (chipName: string) => void;
  handleChipPosition: (postion: number) => void;
  $chipFieldName: string[];
  $chipPositionName: string[];
}
interface SelectedChipListProps {
  $chipFieldName: string[];
  $chipPositionName: string[];
}

export const SeniorListBackground: React.FC<SeniorListBackgroundProps> = ({
  children,
  handleFilterActiveBtn,
  handleReset,
  positionChipNum,
  chipFieldName,
  deleteFieldList,
  handleChipField,
  chipPositionName,
  deletePositionList,
  handleChipPosition,
}) => {
  const handleDeleteFieldChip = (field: string) => {
    // 삭제되는 fieldName의 최초데이터에서의 index값 찾기
    const findDeleteFieldIndex = FIELD_LIST.findIndex((list) => list.field === field);
    deleteFieldList(field);
    handleChipField(findDeleteFieldIndex);
  };
  const handleDeletePositionChip = (position: string) => {
    const findDeletePositionIndex = POSITION_LIST.findIndex((list) => list.position === position);

    deletePositionList(position);
    handleChipPosition(findDeletePositionIndex);
  };
  return (
    <ListBackground>
      <SeniorSearchWrapper>
        <SearchTitle>선배를 찾아볼까요?</SearchTitle>
        <BtnLayout>
          <FilterButton
            handleFilterActiveBtn={handleFilterActiveBtn}
            positionChipNum={positionChipNum}
            chipFieldName={chipFieldName}
          />
          <LineWrapper>
            <Line292Ic />
          </LineWrapper>
          <ResetIc onClick={handleReset} />
        </BtnLayout>
        <SelectedChipList $chipFieldName={chipFieldName} $chipPositionName={chipPositionName}>
          {chipFieldName.map((field, fieldId) => (
            <Chip key={fieldId}>
              {field}
              <CloseButton onClick={() => handleDeleteFieldChip(field)}>
                <CloseIc />
              </CloseButton>
            </Chip>
          ))}
          {chipPositionName.map((position, positionId) => (
            <Chip key={positionId}>
              {position}
              <CloseButton onClick={() => handleDeletePositionChip(position)}>
                <CloseIc />
              </CloseButton>
            </Chip>
          ))}
        </SelectedChipList>
      </SeniorSearchWrapper>
      {children}
    </ListBackground>
  );
};

const ListBackground = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 4.4rem;
  padding: 1rem 0 3rem;
  border-radius: 16px 16px 0 0;

  background: ${({ theme }) => theme.colors.grayScaleWG};
`;

const SeniorSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchTitle = styled.h2`
  display: flex;
  align-items: center;

  padding: 1rem 21.8rem 0.9rem 2rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

const BtnLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.7rem 2rem;
`;
const SelectedChipList = styled.div<SelectedChipListProps>`
  display: ${({ $chipFieldName, $chipPositionName }) =>
    $chipFieldName.length > 0 || $chipPositionName.length > 0 ? 'flex' : 'none'};
  gap: 0.8rem;
  align-items: center;

  /* 필요에 따라 가로 스크롤바 생성 */
  overflow: scroll hidden;

  height: 4.4rem;
  padding: 0.7rem 2rem;

  white-space: nowrap;
`;
const Chip = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;

  height: 3.3rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.primaryBlue50};

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const CloseButton = styled(CloseIc)`
  padding: 0.4962rem 0.4839rem 0.4962rem 0.5084rem;
`;

const LineWrapper = styled.div`
  padding-left: 13.7rem;
`;
