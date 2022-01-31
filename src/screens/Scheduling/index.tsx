import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg'
import {
  Container, Content, DateInfo, DateTitle, DateValue, Footer, Header, RentalPeriod, Title
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling(){

  const theme = useTheme()
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton 
          onPress={() => {}} 
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim de aluguel 
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={true}>18/01/2022</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content> 

      <Footer>
        <Button title="Confirmar" />  
      </Footer>  

    </Container>
  );
}