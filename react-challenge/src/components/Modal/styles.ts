import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #0004;

  z-index: 999;
`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;

  padding: 64px 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: var(--modal-background);

  @media (min-width: 980px) {
    width: 420px;
    height: 300px;

    padding: 48px 32px;

    border-radius: 4px;
  }
`;

export const TextModal = styled.p`
  width: 180px;
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-color);
  text-align: center;
`;

export const SubTextModal = styled.p`
  font-size: 14px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;

  gap: 12px;
`;
