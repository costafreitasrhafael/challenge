import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);

  padding: 40px;

  background: var(--white-text);
  color: var(--primary-color);
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 14px;

  overflow-y: auto;
`;

export const TitleContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;
`;

export const Title = styled.h5`
  color: var(--secondary-color);
  font-size: 25px;
  font-weight: 600;
`;

export const InstructionsText = styled.p`
  font-size: 18px;
  font-weight: 700;

  margin-bottom: 24px;
`;

export const Main = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;

  gap: 64px;
`;

export const InputsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 28px;
`;

export const SelectContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const Buttons = styled.div`
  width: 100%;

  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;
