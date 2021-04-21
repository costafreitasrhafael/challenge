import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 140px;

  padding: 18px 36px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 4px;
  box-shadow: 2px 2px 8px #00000029;

  color: var(--primary-color);
`;

export const CardHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const Icons = styled.div`
  display: flex;
  gap: 8px;

  color: var(--secondary-color);
`;

export const CardContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const InfoSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TitleSection = styled.p``;

export const TextSection = styled.p`
  font-weight: 700;
`;
