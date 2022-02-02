import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native'

import { Accessory } from '../Accessory';
import { BackButton } from '../BackButton';
import { ImageSlider } from '../ImageSlider';

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import{About, Accessories, Brand, CarImages, Container, Content, Description, Details, Footer, Header, Name, Period, Price, Rent, } from './styles';
import { Button } from '../Button';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';


interface Params {
  car: CarDTO;
}

export function CarDetails(){
  const navigation = useNavigation()
  const route = useRoute()
  const {car } = route.params as Params

  function handleScheduling(){
    navigation.navigate('Scheduling', {car})
  }

  return (
    <Container>
      <Header>
        <BackButton  />
      </Header>

      <CarImages>
        <ImageSlider imageUrl={car.photos} />
      </CarImages>      

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
         
        </Details>
        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory 
                key={accessory.type} 
                name={accessory.name} 
                icon={getAccessoryIcon(accessory.type)} 
              />
            ))            
          }
        </Accessories>
        
        <About>{car.about}</About>
    
      </Content>   
      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleScheduling} />  
      </Footer>  

    </Container>
  );
}

