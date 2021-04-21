import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 60px;

  padding: 16px 16px 16px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--primary-color);

  box-shadow: 0px 1px 6px #0008;
  border-bottom: 3px solid #3332;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  color: var(--secondary-color);
`;

export const HeaderUser = styled.a`
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;

  color: var(--white-text);
`;

export const HeaderUserName = styled.p`
  font-size: 16px;
`;

export const ProfileExpand = styled.div`
  position: absolute;
  right: 6px;
  top: 44px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProfileTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid var(--notification-box-background);
  margin-right: 6px;
`;

export const ProfileBox = styled.div`
  width: 140px;
  min-height: 52px;
  max-height: 300px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  border-radius: 8px;

  background: var(--notification-box-background);
`;

export const ProfileBoxItem = styled.button`
  width: 100%;
  height: 52px;

  padding: 12px 16px;

  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 14px;
  font-weight: 400;

  color: var(--notification-primary-text-color);
  background: var(--white-text);
`;
