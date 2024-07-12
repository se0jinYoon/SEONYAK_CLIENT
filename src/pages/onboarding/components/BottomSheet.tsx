import { Header } from '@components/commons/Header';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { ArrowLeftIc } from '../../../assets/svgs';

interface bottomSheetPropType {
  handeClose: () => void;
  children: ReactNode;
}
const BottomSheet = ({ handeClose, children }: bottomSheetPropType) => {
  return (
    <Wrapper>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={handeClose} />
      <Divider />
      {children}
    </Wrapper>
  );
};

export default BottomSheet;

const Wrapper = styled.div`
  z-index: 2;
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin: -9rem 2rem 9rem -2rem;
  background-color: white;
  padding-top: 4rem;
`;

const Divider = styled.hr`
  width: 100%;
  height: 0;
  stroke-width: 1.4px;
  stroke: ${({ theme }) => theme.colors.grayScaleLG2};
`;
