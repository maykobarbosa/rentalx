import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import theme from '../../styles/theme';
import * as Yup from 'yup'

import {
  Container, Footer, Form, Header, SubTitle, Title
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

export function SignIn(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signIn} = useAuth()

  async function handleSignIn(){
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('A senha é obrigatório')
      })
      await schema.validate({ email, password }) 
      Alert.alert('Tudo certo')

     /// Fazer Login
      signIn({email, password})
    } catch (error) {
      if(error instanceof Yup.ValidationError){
        Alert.alert('Opa', error.message)
      }else{
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }    
  }

  const navigation = useNavigation()
  function handleNewAccount(){
    navigation.navigate('SignUpFirstStep')
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <Container>
          <StatusBar 
            barStyle='dark-content' 
            backgroundColor="transparent" 
            translucent
          />
          <Header>
            <Title>
              Estamos {'\n'}quase lá
            </Title>
            <SubTitle>
              Faça seu login para começar {'\n'}
              uma experiência incrível.
            </SubTitle>
          </Header>
          
        <Form>
          <Input 
            iconName="mail"
            placeholder='E-mail'
            keyboardType='email-address'
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />

          <InputPassword
            iconName="lock"
            placeholder='Senha'
            onChangeText={setPassword}
            value={password}
            
          />
        </Form>

          <Footer>
            <Button 
              title="Login"
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />
            <Button 
              title="Criar conta gratuita"
              onPress={handleNewAccount}
              color={theme.colors.background_secundary}
              enabled={true}
              loading={false}
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}