
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { InputPassword } from '../../../components/InputPassword';
import theme from '../../../styles/theme';

import {
  Container, Form, FormTitle, Header, Steps, SubTitle, Title
} from './styles';


interface Params {
  user: {
    name: string, 
    email: string,
    driverLicense: string,
  }
}

export function SignUpSecondStep(){
  const route = useRoute()
  const navigation = useNavigation()
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const { user } = route.params as Params
  function handleRegister(){
    if(!password || !passwordConfirm){
      return Alert.alert('Informe a senha e a confirmação.')
    }
    if(password != passwordConfirm){
      return Alert.alert('As senhas não são iguais.')
    }
    navigation.navigate('Confirmation',{
      nextScreenRoute: 'SignIn',
      title: 'Conta criada!',
      message: `Agora é só fazer login\ne aproveitar`
    })
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
          onChangeText={setPasswordConfirm}
          value={passwordConfirm}
          
        />
      </Form>
      <Button title="Cadastrar" onPress={handleRegister} color={theme.colors.success} />
    </Container>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}