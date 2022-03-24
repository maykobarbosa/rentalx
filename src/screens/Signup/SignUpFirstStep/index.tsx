
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import {
  Container, Form, FormTitle, Header, Steps, SubTitle, Title
} from './styles';

export function SignUpFirstStep(){

  const navigation = useNavigation()
  function handleSecondStep(){
    navigation.navigate('SignUpSecondStep')
  }


  return (
    <KeyboardAvoidingView behavior='position' enabled >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
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
          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input iconName="user" placeholder='Nome'/>
            <Input iconName="mail" placeholder='E-mail' keyboardType='email-address'/>
            <Input iconName="credit-card" placeholder='CNH' keyboardType="numeric" />
          </Form>
          <Button title="Próximo"  onPress={handleSecondStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}