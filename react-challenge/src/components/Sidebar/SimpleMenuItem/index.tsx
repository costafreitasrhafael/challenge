import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';
import { Container } from './styles';

interface Props {
  title: string;
  urlPath: string;
  Icon: IconType;
  expand: boolean;
  testid?: string;
}

const SimpleMenuItem: React.FC<Props> = ({
  testid,
  title,
  urlPath,
  Icon,
  expand,
}) => {
  return (
    <Container expand={expand}>
      <NavLink data-testid={testid} to={urlPath} activeClassName="active-route">
        <Icon size={22} />
        <h3>{title}</h3>
      </NavLink>
    </Container>
  );
};

export default SimpleMenuItem;
