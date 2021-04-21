import React from 'react';
import { RiCheckboxCircleLine, RiCloseCircleLine } from 'react-icons/ri';

import { FiAlertTriangle } from 'react-icons/fi';

import {
  Container,
  Main,
  ButtonContainer,
  TextModal,
  SubTextModal,
} from './styles';

interface IModal {
  text: string;
  type: string;
  subText?: string;
}

const Modal: React.FC<IModal> = ({ text, subText, type, children }) => {
  let Icon;
  if (type === 'sucess') {
    Icon = <RiCheckboxCircleLine color="#238E58" size={64} />;
  } else if (type === 'warning') {
    Icon = <FiAlertTriangle color="#FF750B" size={64} />;
  } else if (type === 'error') {
    Icon = <RiCloseCircleLine color="#D34A4A" size={64} />;
  }

  return (
    <Container>
      <Main>
        {Icon}
        <TextModal>{text}</TextModal>
        {subText ? <SubTextModal>{subText}</SubTextModal> : <></>}
        <ButtonContainer>{children}</ButtonContainer>
      </Main>
    </Container>
  );
};

export default Modal;
