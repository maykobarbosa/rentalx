import React from 'react';

import { Accessory } from '../Accessory';
import { BackButton } from '../BackButton';
import { ImageSlider } from '../ImageSlider';
import {Feather} from '@expo/vector-icons'
import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import{ Acessories, Brand, CalendarIcon, CarImages, Container, Content, DateInfo, DateTitle, DateValue, Description, Details, Footer, Header, Name, Period, Price, Rent, RentalDetails, RentalPeriod, RentalPrice, RentalPriceLabel, RentalPriceQuota, RentalPriceTotal, } from './styles';
import { Button } from '../Button';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

export function SchedulingDetails(){
  const theme = useTheme()
  return (
    <Container>
      <Header>
        <BackButton onPress={()=> {}} />
      </Header>

      <CarImages>
        <ImageSlider imageUrl={[
          "data:image/jpeg;base64,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"
        ]} />
      </CarImages>      

      <Content>
        <Details>
          <Description>
            <Brand>Honda</Brand>
            <Name>FIT</Name>
          </Description>
          
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 150,00</Price>
          </Rent>
         
        </Details>
        <Acessories>
          <Accessory name="180km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="5 pessoas" icon={PeopleSvg} />
        </Acessories>
        
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/01/2022</DateValue>
          </DateInfo>
          <Feather
              name='chevron-right'
              size={RFValue(10)}
              color={theme.colors.text}
            />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue >18/02/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalDetails>
            <RentalPriceQuota>R$ 150 x 3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 450</RentalPriceTotal>
          </RentalDetails>
        </RentalPrice>

      </Content>   
      <Footer>
        <Button title="Alugar" color={theme.colors.success}/>  
      </Footer>  

    </Container>
  );
}