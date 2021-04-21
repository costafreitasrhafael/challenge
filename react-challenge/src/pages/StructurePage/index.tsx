import React from 'react';

import { Container, Main } from './styles';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const StructurePage: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Main>{children}</Main>
      </Container>
    </>
  );
};

export default StructurePage;
