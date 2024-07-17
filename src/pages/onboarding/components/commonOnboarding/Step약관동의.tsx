import { ArrowRightIc, CheckItemIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import styled from '@emotion/styled';
import { 약관_LIST } from '@pages/onboarding/constants';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Step약관동의 = () => {
  const ROLE = 'SENIOR'; // 임시
  const navigate = useNavigate();
  const handleClickLink = () => {
    if (ROLE === 'SENIOR') navigate('/seniorOnboarding/2');
    else navigate('/juniorOnboarding/2');
  };

  const [agreement, setAgreement] = useState(Array(5).fill(false));

  const handleClickCheck = (id: number | 'all') => {
    if (id === 'all') {
      if (!agreement.some((v) => !v)) setAgreement(Array(5).fill(false));
      else setAgreement(Array(5).fill(true));
    } else {
      setAgreement((prev) => agreement.with(id, !prev[id]));
    }
  };

  return (
    <Wrapper>
      <ItemWrapper type="button" onClick={() => handleClickCheck('all')}>
        <ItemLeftWrapper>
          <IconWrapper $isChecked={!agreement.some((v) => !v)}>
            <CheckItemIc />
          </IconWrapper>
          <Item>전체 동의</Item>
        </ItemLeftWrapper>
      </ItemWrapper>
      <Line />
      {약관_LIST.map(({ text, link }, idx) => (
        <li key={text}>
          <ItemWrapper type="button" onClick={() => handleClickCheck(idx)}>
            <ItemLeftWrapper>
              <IconWrapper $isChecked={agreement[idx]}>
                <CheckItemIc />
              </IconWrapper>
              <Item>{text}</Item>
            </ItemLeftWrapper>
            <Link to={link ? link : ''} target="_blank" onClick={(e) => link || e.preventDefault()}>
              {idx < 2 && <ArrowRightIc />}
            </Link>
          </ItemWrapper>
        </li>
      ))}
      <FullBtn
        text="동의하기"
        isActive={agreement[0] && agreement[1] && agreement[2] && agreement[3]}
        onClick={handleClickLink}
      />
    </Wrapper>
  );
};

export default Step약관동의;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;

  padding-top: 1.3rem;
`;

const ItemWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 3.8rem;
`;

const ItemLeftWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Item = styled.span`
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const Line = styled.hr`
  width: 100%;
  height: 0.1rem;
  border: 0;

  background-color: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const IconWrapper = styled.i<{ $isChecked: boolean }>`
  & path {
    fill: ${({ $isChecked, theme }) => ($isChecked ? theme.colors.Blue : theme.colors.grayScaleLG2)};
  }
`;
