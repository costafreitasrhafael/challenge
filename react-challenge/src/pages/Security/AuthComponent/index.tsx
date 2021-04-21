import React from 'react';

import intl from '../../../locales/intl';
import { Container, CenterMain, InputsContainer, InputsContainerTitle, Terms } from './styles';

const CommonAuthComponent: React.FC = ({ children }) => {
  return (
    <Container>
      <CenterMain>
        <InputsContainer>
          <InputsContainerTitle>Full Stack Challange</InputsContainerTitle>
            {children}
            <Terms>{intl.get('Pages.CommonAuthComponent.terms')}</Terms>
        </InputsContainer>
      </CenterMain>
    </Container>
  );
};

export default CommonAuthComponent;
