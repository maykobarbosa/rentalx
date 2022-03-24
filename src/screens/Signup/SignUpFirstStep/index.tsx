
import React from 'react';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';

import {
  Container, Header, Steps, SubTitle, Title
} from './styles';

export function SignUpFirstStep(){




  return (
    <Container>
      <Header>
        <BackButton 
          onPress={() => {}}         
        />
        <Steps>
          <Bullet active />
          <Bullet  />
        </Steps>        
      </Header>
      <Title>
        Crie sua{'\n'}conta        
      </Title>
      <SubTitle>
        Faça seu cadastro de {'\n'}
        forma rápida e fácil
      </SubTitle>
    </Container>
  );
}