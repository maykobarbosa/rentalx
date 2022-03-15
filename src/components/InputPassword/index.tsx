import React, { useState } from 'react';
import theme from '../../styles/theme';
import {Feather} from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';
import {
  Container, IconContainer, InputText
} from './styles';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps{
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function InputPassword({
  iconName, ...rest
}: Props){
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)

  function handlePasswordVisibilityChange(){
    //inverter valor
    setIsPasswordVisible(prevState => !prevState)

  }

  return (
    <Container  >
      <IconContainer>
        <Feather 
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />
      </IconContainer>
      <InputText 
        {...rest} 
        secureTextEntry={isPasswordVisible}
      />
      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconContainer>
            <Feather 
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
              color={theme.colors.text_detail}
              
            />
        </IconContainer>
      </BorderlessButton>      
    </Container>
  );
}