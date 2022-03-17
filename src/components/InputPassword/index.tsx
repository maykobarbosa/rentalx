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
  iconName, value, ...rest
}: Props){
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)

  function handlePasswordVisibilityChange(){
    //inverter valor
    setIsPasswordVisible(prevState => !prevState)

  }

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function handleInputFocus(){
    setIsFocused(true)
  }

  function handleInputBlur(){
    setIsFocused(false)
    setIsFilled(!!value)
    
  }

  return (
    <Container >
      <IconContainer 
        isFocused={isFocused} >
        <Feather 
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
        />
      </IconContainer>
      <InputText 
        isFocused={isFocused} 
        secureTextEntry={isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest} 
      />
      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconContainer 
        isFocused={isFocused} >
            <Feather 
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color={theme.colors.text_detail}              
            />
        </IconContainer>
      </BorderlessButton>      
    </Container>
  );
}