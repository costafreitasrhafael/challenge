import styled from 'styled-components';

interface Props {
  expand: boolean;
}

export const Container = styled.div<Props>`
  width: ${props => (props.expand ? '100vw' : 0)};
  height: calc(100vh - 60px);

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 22px;

  gap: 8px;

  background: var(--primary-color);

  overflow-y: auto;

  z-index: 99;

  @media (min-width: 1028px) {
    width: 240px;

    position: relative;
  }

  transition: width 0.3s;

  .active-route {
    color: var(--secondary-color);
    border-left: 3px solid var(--secondary-color);

    box-shadow: 0px 2px 12px #0003;

    h3 {
      color: var(--white-text);
    }
  }
`;

export const MenuHamburger = styled.div<Props>`
  width: ${props => (props.expand ? '98%' : 'auto')};
  position: ${props => (props.expand ? 'relative' : 'fixed')};
  top: ${props => (props.expand ? '0' : '72px')};
  left: ${props => (props.expand ? '0' : '12px')};

  z-index: 99;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  border-radius: 4px;

  background: var(--primary-color);
  color: var(--white-text);

  cursor: pointer;

  @media (min-width: 1028px) {
    display: none;
  }
`;
