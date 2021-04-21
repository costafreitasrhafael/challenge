import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

export const Container = styled.div`
  width: 48%;

  display: flex;
  flex-direction: column;

  gap: 18px;
`;

export const WelcomeText = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-align: center;

  color: #808495;
`;

export const LoginOptions = styled.div`
  width: 103%;
  margin-left: -3%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RememberContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RememberText = styled.p`
  font-size: 14px;
`;

export const ForgotPasswordText = styled(Link)`
  background: none;

  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;

  border-radius: 4px;

  background: var(--primary-color);
  color: var(--white-text);
`;

export const EyeIcon = styled(RiEyeLine)`
  width: 16px;
  cursor: pointer;
  z-index: 20;
`;

export const EyeOffIcon = styled(RiEyeOffLine)`
  width: 16px;
  cursor: pointer;
  z-index: 20;
`;