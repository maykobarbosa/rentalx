import React from 'react';
import theme from '../../styles/theme';
import {Feather} from '@expo/vector-icons'

import {
  Container, IconContainer, InputText
} from './styles';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps{
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function Input({
  iconName, ...rest
}: Props){
  return (
    <Container  >
      <IconContainer>
        <Feather 
          name={iconName}
          size={24}
          color={theme.colors.text_detail}
        />

      </IconContainer>
      <InputText {...rest} />
    </Container>
  );
}