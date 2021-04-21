import React from 'react';
import { IconType } from 'react-icons';

import { Container, TextButton } from './styles';

interface ButtonProps {
  text: string;
  Icon?: IconType;
  clickFunction: () => void;
  color: string;
  background: string;
  border?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  Icon,
  clickFunction,
  color,
  background,
  border,
}) => {
  return (
    <Container
      color={color}
      background={background}
      border={border}
      onClick={() => clickFunction()}
    >
      {Icon ? <Icon size={18} /> : <></>}
      <TextButton>{text}</TextButton>
    </Container>
  );
};

export default CustomButton;
