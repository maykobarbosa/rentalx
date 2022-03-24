
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import * as Yup from 'yup'
import {
  Container, Form, FormTitle, Header, Steps, SubTitle, Title
} from './styles';

export function SignUpFirstStep(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [driverLicense, setDriverLicense] = useState('')

  const navigation = useNavigation()
  async function handleSecondStep(){
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string()
        .required('A CNH é obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        name: Yup.string()
          .required('O nome é obrigatório'),
      })
      const data = { email, name, driverLicense }
      await schema.validate(data) 
      Alert.alert('Tudo certo')

      navigation.navigate('SignUpSecondStep', {user: data})
     /// Fazer Login
    } catch (error) {
      if(error instanceof Yup.ValidationError){
        Alert.alert('Opa', error.message)
      }else{
        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer cadastro, verifique os dados'
        )
      }
    }    

    
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
            <Input 
              iconName="user" 
              placeholder='Nome'
              onChangeText={setName}
              value={name}
            />
            <Input 
              iconName="mail" 
              placeholder='E-mail' 
              keyboardType='email-address'
              onChangeText={setEmail}
              value={email}
            />
            <Input 
              iconName="credit-card" 
              placeholder='CNH' 
              keyboardType="numeric" 
              onChangeText={setDriverLicense}
              value={driverLicense}
            />
          </Form>
          <Button title="Próximo"  onPress={handleSecondStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}