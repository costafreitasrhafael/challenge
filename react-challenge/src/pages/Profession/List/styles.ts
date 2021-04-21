import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);

  padding: 40px;

  background: var(--white-text);
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 14px;

  overflow-y: auto;
`;

export const TitleContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 30px;

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h5`
  color: var(--secondary-color);
  font-size: 25px;
  font-weight: 600;
`;

export const InputsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;

  @media (min-width: 767px) {
    width: 80%;

    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  margin-top: 16px;

  @media (min-width: 767px) {
    margin-top: -16px;
  }
`;

export const Cards = styled.div`
  width: 100%;

  margin-top: 80px;

  display: grid;
  grid-template-columns: 1fr;

  gap: 20px;

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
`;
