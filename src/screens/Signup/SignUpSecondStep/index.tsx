
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { InputPassword } from '../../../components/InputPassword';
import theme from '../../../styles/theme';

import {
  Container, Form, FormTitle, Header, Steps, SubTitle, Title
} from './styles';

export function SignUpSecondStep(){


  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView behavior='position' enabled >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    <Container>
      <Header>
        <BackButton 
          onPress={() => {}}         
        />
        <Steps>
          <Bullet />
          <Bullet active  />
        </Steps>        
      </Header>
      <Title>
        Crie sua{'\n'}conta        
      </Title>
      <SubTitle>
        Faça seu cadastro de {'\n'}
        forma rápida e fácil
      </SubTitle>
      <Form>
        <FormTitle>2. Senha</FormTitle>
        <InputPassword
            iconName="lock"
            placeholder='Senha'
            onChangeText={setPassword}
            value={password}
            
        />
        <InputPassword
          iconName="lock"
          placeholder='Repetir senha'
          onChangeText={setPassword}
          value={password}
          
        />
      </Form>
      <Button title="Cadastrar" color={theme.colors.success} />
    </Container>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}