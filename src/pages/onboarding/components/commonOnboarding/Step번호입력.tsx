import { FullBtn } from '@components/commons/FullButton';
import { useState, useEffect, ChangeEvent, useContext } from 'react';
import { formatTime } from '../../utils/formatTime';
import { InnerButton, InputBox, TextBox } from '../TextBox';
import styled from '@emotion/styled';
import { formatPhone } from '@pages/onboarding/utils/formatPhone';
import WarnDescription from '@components/commons/WarnDescription';
import { AutoCloseModal } from '@components/commons/modal/AutoCloseModal';
import { useNavigate } from 'react-router-dom';

const Step번호입력 = () => {
  const ROLE = 'JUNIOR'; // 임시
  const navigate = useNavigate();
  const handleClickLink = () => {
    if (ROLE === 'SENIOR') alert('온보딩 끝!');
    else navigate('/juniorOnboarding/step4');
  };

  const [isNumError, setIsNumError] = useState(false);
  const [isValidCodeError, setIsValidCodeError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  // 임시 변수
  const VERIFICATION_CODE = '0000';
  const USER_INPUT = '0000';

  const TIME = 180 * 1000;
  const [timeLeft, setTimeLeft] = useState(TIME);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { minutes, seconds } = formatTime(timeLeft);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(id);
          setIsActive(false);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [isActive, timeLeft]);

  const handleClickTimer = () => {
    setIsActive(true);
    setTimeLeft(TIME);
  };

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedNum = formatPhone(e.target.value);
    setPhoneNumber(formattedNum);
  };

  const handleShowModal = (type: boolean) => {
    setIsModalOpen(type);
  };

  const handleClickButton = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      handleClickLink();
    }, 2000);
  };

  return (
    <Wrapper>
      <TextBox label="">
        <>
          <InputBox
            label="폰번호"
            placeholder="전화번호를 입력해 주세요"
            value={phoneNumber}
            onChange={handleChangePhone}
            isError={isNumError}>
            <InnerButton onClick={handleClickTimer} text={isActive ? '재전송' : '인증번호 전송'} />
          </InputBox>
          {isNumError && <WarnDescription isShown={isNumError} warnText="이미 사용 중인 번호예요." />}
        </>
        {isActive && (
          <>
            <InputBox
              label="인증번호"
              placeholder="전송된 4자리 코드를 입력해 주세요"
              maxLength={4}
              isError={isValidCodeError}>
              <Timer>
                {minutes} : {seconds}
              </Timer>
            </InputBox>
            {isValidCodeError && (
              <WarnDescription isShown={isValidCodeError} warnText="코드가 틀렸어요. 다시 한번 확인해 주세요." />
            )}
          </>
        )}
      </TextBox>
      <FullBtn
        text="인증 확인"
        isActive={timeLeft > 0 && USER_INPUT === VERIFICATION_CODE}
        onClick={handleClickButton}
      />
      <AutoCloseModal text="인증에 성공했어요" showModal={isModalOpen} handleShowModal={handleShowModal}>
        <DummyImage />
      </AutoCloseModal>
    </Wrapper>
  );
};

export default Step번호입력;

const Wrapper = styled.div`
  padding-top: 2rem;
`;

const Timer = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 1.45rem;

  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;

const DummyImage = styled.div`
  width: 27rem;
  height: 17rem;

  background-color: red;
`;
