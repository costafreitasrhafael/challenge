import styled from 'styled-components';

interface ButtonStyleProps {
  color: string;
  background: string;
  border?: string;
}

export const Container = styled.button<ButtonStyleProps>`
  min-width: 140px;
  height: 38px;

  padding: 16px 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-radius: 4px;

  box-shadow: 3px 3px 6px #00000029;
`;

export const TextButton = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
