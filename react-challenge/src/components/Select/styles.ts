import styled from 'styled-components';

interface SelectStyleProps {
  color: string;
  background: string;
  border?: string;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;

  .arrow {
    margin-left: -12px;
    pointer-events: none;
  }
`;

export const SelectBox = styled.select<SelectStyleProps>`
  min-width: 100%;
  height: 30px;

  color: ${({ color }) => color};
  border: ${({ border }) => border};
  background: ${({ background }) => background};

  font-size: 16px;

  cursor: pointer;

  appearance: none;
  padding: 5px 3px;

  border-bottom: 1px solid #e9e9f0;
`;
