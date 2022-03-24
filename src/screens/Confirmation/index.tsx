import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native'
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import { Container, Content, Footer, Message, Title } from './styles';

import { ConfirmButton } from '../../components/ConfirmButton';

interface Params{
  title: string;
  message: string;
  nextScreenRoute: string;
}


export function Confirmation(){
  const {width} = useWindowDimensions()
  const route = useRoute()
  const { title , message, nextScreenRoute} = route.params as Params
  const navigation = useNavigation()
  function handleConfirmation(){
    navigation.navigate(nextScreenRoute)
  }
  return (
    <Container>
       <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirmation} />
      </Footer>
    </Container>
  );
}