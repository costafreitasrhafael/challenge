import styled from 'styled-components';

interface Props {
  expand: boolean;
}

export const Container = styled.div<Props>`
  width: 100%;

  display: flex;
  align-items: center;

  a {
    width: 100%;
    padding: 12px 6px 14px 12px;

    display: flex;
    align-items: center;
    gap: 10px;

    color: var(--white-text);

    h3 {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
