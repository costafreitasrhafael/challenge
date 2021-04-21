import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const CenterMain = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #808495;

  @media (max-width: 980px) {
    width: 100%;
    justify-content: center;
  }
`;

export const InputsContainer = styled.div`
  width: 546px;
  height: 560px;

  @media (min-width: 1400px) {
    width: 768px;
    height: 788px;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  gap: 32px;

  border-radius: 20px 20px;

  background: #fff;
`;

export const InputsContainerTitle = styled.h2`
  color: var(--secondary-color);
`;

export const Terms = styled.p`
  text-align: center;
`;
